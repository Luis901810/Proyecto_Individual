const axios = require("axios");
require("dotenv").config();
const { URLAPI, YOUR_API_KEY } = process.env;

const RecipesByName = async (name) => {
    try {
        const { data } = await axios(`${URLAPI}/complexSearch/?apiKey=${YOUR_API_KEY}&number=100&addRecipeInformation=true`);
        
        const matchingRecipes = data.results.filter(Recipe => Recipe.title.toLowerCase().includes(name.toLowerCase()));
        return matchingRecipes;
        
    } catch (error) {
        throw new Error( "Error al buscar recetas por nombre")
        
    }
};
module.exports = RecipesByName;