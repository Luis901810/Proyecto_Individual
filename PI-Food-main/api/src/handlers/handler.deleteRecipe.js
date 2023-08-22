const deleteData = require("../controllers/deleteRecipe");

const deleteRecipe = async( req, res) =>{
    try {
        const { id } = req.params
        await deleteData(id)
        return res.status(200).json({message: "La Receta se elimino con exito.", id})
        
    } catch (error) {
        return res.status(404).json({error: "No se encontro Receta con ese id."})
        
    }
}

module.exports=  deleteRecipe;