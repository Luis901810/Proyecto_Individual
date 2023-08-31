const recipesApi = require("../handlers/handlerRecipesAll")


const getRecipes = async (req, res) =>{
    try {
        

        const recipes = await recipesApi();
        res.status(200).json(recipes)
        
    } catch (error) {
        res.status(500).json({error: "Error interno en el servidor"})
        
    }
}
module.exports=getRecipes;