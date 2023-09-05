

const { Recipe, Diets } = require("../db");


const newData = async({ title, image, summary, healthScore,instructions,dietId}) =>{
        const stringInstructions = Array.isArray(instructions) ? instructions.join('') : String(instructions);

    try {
        if (instructions !== undefined && typeof instructions !== 'string' && stringInstructions.trim() !== '') {
            throw new Error("Las instrucciones deben ser una cadena de texto o estar vacías");
        }

        if (title === undefined || image === undefined || summary === undefined || healthScore === undefined) {
            throw new Error("Faltan datos");
        }
        let newRecipe = await Recipe.create({
           
            title,
            image,
            healthScore,
            summary,
            instructions:stringInstructions,
            dietId
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