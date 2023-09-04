require('dotenv').config();

const { URLAPI, YOUR_API_KEY } = process.env;
const axios = require('axios');
const { Recipe, Diets } = require('../db');
const { Op } = require("sequelize");

const dataApi = async (name) => {
    const response = await axios(`${URLAPI}/complexSearch/?apiKey=${YOUR_API_KEY}&query=${name}&addRecipeInformation=true&number=10`);
    return response.data.results;
};

const dataDB = async (name) => {
    const response = await Recipe.findAll({
        where: {
            title: {
                [Op.like]: `%${name}%`
            }
        },
        include: {
            model: Diets,
            attributes: ["name"]
        }
    });
    return response.map(record => record.dataValues);
};

const processApiData = (data) => {
    return data.map(recipe => {
        const ingredients = [];
        const equipment = [];
        
        
        
        return {
            id: recipe.id,
            title: recipe.title,
            image: recipe.image,
            healthScore: recipe.healthScore,
            summary: recipe.summary,
            instructions: recipe.analyzedInstructions[0]?.steps.map(step => step.step),
            ingredients,
            equipment,
            diets: recipe.diets,
        };
    });
};

const processDatabaseData = (data) => {
    return data.map(record => {
        return {
            id: record.id,
            title: record.title,
            image: record.image,
            healthScore: record.healthScore,
            summary: record.summary,
            instructions: record.instructions,
            ingredients: record.ingredients,
            equipment: record.equipment,
            diets: record.diets.map(diet => diet.name),
        };
    });
};

const RecipesByName = async (name) => {
    let responseApi = [];
    let responseBD = [];

    if (name) {
        const lowercaseName = name.toLowerCase();
        responseApi = await dataApi(lowercaseName);
        responseBD = await dataDB(lowercaseName);
    } else {
        responseApi = await dataApi("");
        responseBD = await dataDB("");
    }

    const processedApiData = processApiData(responseApi);
    const processedDatabaseData = processDatabaseData(responseBD);

    return [...processedApiData, ...processedDatabaseData];
};

module.exports =  RecipesByName ;