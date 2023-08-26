const dataApiDB = require("../handlers/handlerRecipeId");

const getRecetasById = async (req, res) => {
    try {
        const { id } = req.params;
    

        if (!Number.isInteger(Number(id))) {
            return res.status(400).json({ error: `el id: ${id} debe ser numero entero valido` });
        }
        const data = await dataApiDB(id);
        

        if (!data) {
            
            return res.status(404).json({error: `No se encontro ninguna receta con ese ID: ${id}` })
        }
       
        return res.status(200).json(data);

    } catch (error) {
        
            return res.status(500).json({ error: "Ocurrió un error en el servidor. Por favor, intenta más tarde" });
        
    }
};

module.exports =  getRecetasById ;
