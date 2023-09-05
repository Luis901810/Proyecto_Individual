const axios = require('axios');
require('dotenv').config();
const { YOUR_API_KEY, URLAPI } = process.env;
const { Recipe, Diets } = require("../db");
const { v4: uuidv4 } = require('uuid');

const recipesApi = async () => {
    try
    {
        const resAxios = await axios(`${URLAPI}/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=10`);
        const { results } = resAxios.data ;
    
        
        if (results.length > 0) {

            let response = await results?.map((result) => {
                return {
                    
                    id:result.id, 
                    title: result.title,
                    image: result.image, 
                    vegetarian: result.vegetarian,
                    vegan: result.vegan,
                    glutenFree: result.glutenFree,
                    dairyFree: result.dairyFree, 
                    score: result.spoonacularScore,
                    healthScore: result.healthScore,
                    types: result.dishTypes?.map(element => element),  
                    diets: result.diets?.map(element => element), 
                    summary:result.summary, 
                    steps: (result.analyzedInstructions[0] && result.analyzedInstructions[0].steps?result.analyzedInstructions[0].steps.map(item=>item.step).join(" \n"):'')
                }        
            })

        return response;
    } 

    }catch (error) {
        console.error(error);
        return ([])
    }
}
module.exports = recipesApi

const DBInfo = async () => {
    try{
        const dataDB =  await Recipe.findAll({ 
            include:{
                model: Diets,
                attributes: ['name'],
                through:{
                    attributes: []
                }
            }
        })
    let response = await dataDB?.map(recipe => {
        return {

                     id: recipe.id,
                     name: recipe.name,
                     summary: recipe.summary,
                     score: recipe.score,
                     healthScore: recipe.healthScore,
                     image: recipe.image,
                     steps: recipe.steps,
                     diets: recipe.diets?.map(diet => diet.name),
                 }
             });
        return response;
    }catch (error) {
      console.error(error);
    }
}



