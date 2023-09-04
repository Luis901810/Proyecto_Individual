const axios = require('axios');
require('dotenv').config();
const { YOUR_API_KEY, URLAPI } = process.env;
const { Recipe, Diets } = require("../db");

const extractRecipeData = (data) => {
    const instructions = data.analyzedInstructions[0]?.steps.map(ele => ele.step) || [];
    const ingredients = data.analyzedInstructions[0]?.steps.flatMap(ele => ele.ingredients.map(ele => ele.name)) || [];
    const equipment = data.analyzedInstructions[0]?.steps.flatMap(ele => ele.equipment.map(ele => ele.name)) || [];

    return {
        id: data.id,
        title: data.title,
        image: data.image,
        healthScore: data.healthScore,
        summary: data.summary.replace(/<[^>]+>/g, ''),
        instructions,
        ingredients,
        equipment,
        diets: data.diets || []
    };
};

const dataApiDB = async (id) => {
    try {
        if (id) {
            const response = await Recipe.findByPk(id, {
               
                include: {
                    model: Diets,
                    attributes: ["name"]
                }
            });

            if (response?.dataValues?.title) {
                
                return extractRecipeData(response.dataValues);
                }
            // } else {
                
            //     throw new Error("La receta no se encontró en la base de datos.");
            // }
           
        } 
    


        const responseApi = await axios(`${URLAPI}/${id}/information?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=10`);
          console.log(responseApi)
            const responseApiData = responseApi?.data;

            if (responseApiData?.title) {
                return extractRecipeData(responseApiData);
            } else {
                throw new Error("La receta no se encontró en la API externa.");
            }
        
    } catch (error) {
        console.error("Error:", error.message);
        return null;
    }
};

module.exports = dataApiDB;