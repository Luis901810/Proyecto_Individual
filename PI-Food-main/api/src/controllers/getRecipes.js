const axios  = require("axios");
require("dotenv").config()
const { YOUR_API_KEY } = process.env;

const URLAPI ="https://api.spoonacular.com/recipes"

const getRecetasById = async (req, res) =>{
    try {
        const { id } = req.params;
        const { data} = await axios.get(`${URLAPI}/${id}/information?apiKey=${YOUR_API_KEY}`)
        const {title, image, imageType} =data
        if(!title) throw Error("No hay recetas con ese nombre con el ID:" + id)
       
        
        const Receta ={
            id,
            title,
            image,
            imageType
        }
    
    return res.status(200).json(Receta)
         
    } catch (error) {
        return error.message.includes("id")
        ?res.status(404).send(error.message)
        :res.status(500).json({error: error.message})
        
    }
   
}
module.exports = getRecetasById;