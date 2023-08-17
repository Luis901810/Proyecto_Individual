const axios = require("axios");
require("dotenv").config()
const { URLAPI, YOUR_API_KEY} = process.env;


const getRecipesName = async(req, res) =>{
    try {
     let { name } = req.query
        if(!name) throw new Error("No hay recetas con ese nombre")
        const { data } = await axios(`${URLAPI}/complexSearch/?apiKey=${YOUR_API_KEY}&number=100`)
        const matchingRecipes= data.results.filter(Recipe => Recipe.title.toLowerCase().includes(name.toLowerCase()))
        
        return res.status(200).json(matchingRecipes)
        
    

        
    } catch (error) {
        return res.status(404).json({error: error.message})
        
    }
}
module.exports= getRecipesName;