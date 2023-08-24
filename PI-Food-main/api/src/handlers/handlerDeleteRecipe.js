const deleteData = require("../controllers/deleteRecipe");

const deleteRecipe = async( req, res) =>{
    try {
        const { id } = req.params
        if (!parseInt(id)) {
            return res.status(400).json({ error: "ID de receta no válido" });
        }
        await deleteData(id)
        return res.status(200).json({message: "La Receta se elimino con exito.", id})
        
    } catch (error) {
        return res.status(404).json({error: error.message})
        
    }
}

module.exports=  deleteRecipe;