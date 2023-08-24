const infApi = require("../handlers/handlerRecipeId");


const getRecetasById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!Number.isInteger(Number(id))) {
            return res.status(400).json({ error: `el id: ${id} debe ser numero entero valido` });
        }

        const data = await infApi(id);

        if (!data) {
            const errorMessage = `No se encontro ninguna receta con ese ID: ${id}`
            return res.status(404).json({error: errorMessage})
        }
        const { title, image, healthScore, summary, instructions } = data;

        const recipeDetails = {
            id,
            title,
            image,
            healthScore,
            summary,
            instructions,
        };

        return res.status(200).json(recipeDetails);
    } catch (error) {
        let errorMessage = "Ocurrio un error en el servidor. Por favor intentar mas tarde"
        

        if(errorMessage.includes("id")){
            errorMessage= "no se encontro la receta solicitada con ese ID";
           
            return res.status(404).json({error: errorMessage})
        } else{
            
            return res.status(500).json({error: errorMessage})
        }
       
    }
}  

module.exports =  getRecetasById ;
