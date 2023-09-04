const axios = require("axios");
require("dotenv").config();
const { YOUR_API_KEY, URLAPI } = process.env;

const typesDietsFuntion = async() =>{
    try {
        const { data } = await axios(`${URLAPI}/complexSearch/?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=10`)
        const recipes = data.results;

        const uniqueDiets =  new Set();

        recipes.forEach(recipe =>{
            const { diets } = recipe
            if ( diets){
               diets.forEach(diet => uniqueDiets.add(diet))
            }
        });
        return Array.from(uniqueDiets).sort();

        
    } catch (error) {
        throw new Error(`Error a la solicitud a la api: ${error.message}`)
        
    }


}
module.exports = typesDietsFuntion;