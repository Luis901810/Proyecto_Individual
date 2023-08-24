const  updataRecipeData  = require("../handlers/handlerUpdate")

const updateRecipe =async(req,res)=>{
    const {id} = req.params

   try {
            const data = await updataRecipeData(id)
            data.set(req.body)  
            await data.save()
            return res.status(200).json(data)
            
        
     } catch (error) {
         return res.status(404).json({error:`No se encontró la receta con este Id: ${id}, prueba con otra.`})
     }
}

module.exports =updateRecipe;