

const { Recipe } = require("../db");

const deleteData = async(id) =>{

    try {
        const deleteRecipe= await Recipe.destroy({
            where:{id}
        })
       
        return {success: deleteRecipe, message:"Recipe eliminado con exito"}
        
    } catch (error) {
        throw new Error(`Error al eliminar el registro ${error.message}`)
        
    }
};

module.exports = deleteData