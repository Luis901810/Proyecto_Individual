const RecipesByName = require("../handlers/handlerRecipeName");

const getRecipesName = async (req, res) => {
    try {
        const { name } = req.query;
      

        if(!name){
        
            return res.status(400).json({error: `Por favor ingresar un nombre valido en la consulta ${name}`})
        }
        const matchingRecipes = await RecipesByName(name);

        if(matchingRecipes.length === 0){
            
            return res.status(404).json({ error: `No se encontraron recetas que coincidan con el nombre: ${name}` });
        }
        
        return res.status(200).json(matchingRecipes);
    } catch (error) {
        return res.status(500).json({ error: "Ocurrio un error al procesar la solicitud de busqueda por nombre." });
    }
};

module.exports = getRecipesName;