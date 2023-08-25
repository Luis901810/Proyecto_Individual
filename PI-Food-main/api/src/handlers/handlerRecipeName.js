const axios = require("axios");
require("dotenv").config();
const { URLAPI, YOUR_API_KEY } = process.env;

const RecipesByName = async (name) => {
    try {
        const { data } = await axios(`${URLAPI}/complexSearch/?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`);
        
        const matchingRecipes = data.results.filter(Recipe => Recipe.title.toLowerCase().includes(name.toLowerCase()));
        return matchingRecipes;
        
    } catch (error) {
        throw new Error( "Error al buscar recetas por nombre")
        
    }
};
module.exports = RecipesByName;