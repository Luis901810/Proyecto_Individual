const { Recipe } = require("../db");

const newData = async({id, title, image, summary, healthScore,instructions,dietId}) =>{
    try {
        if(title === undefined || image === undefined || summary === undefined || healthScore === undefined || instructions === undefined){
           throw new Error(" Faltan datos ") 
        }
        let newRecipe = await Recipe.create({
            id,
            title,
            image,
            healthScore,
            summary,
            instructions
        });

        if(dietId){
             await newRecipe.setDiets(dietId)

        }
       
       return {success: true, message:"Receta creada Exitosamente"}
        
    } catch (error) {
        return {success: false, error: error.message}
        
    }
}
module.exports=newData;