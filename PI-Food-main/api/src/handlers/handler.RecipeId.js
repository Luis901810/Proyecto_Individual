
const axios = require("axios");
require("dotenv").config();

const { YOUR_API_KEY, URLAPI } = process.env;

const infApi = async (id) => {
    try {
        const response = await axios(`${URLAPI}/${id}/information?apiKey=${YOUR_API_KEY}&addRecipeInformation=true`);
        if(response.status !== 200){
            const error= new Error(`Error en la solicitud a la Api. con codigo de estado: ${response.status}`)
            response= error.response;
            return error;
        }
        
        return response.data;
    } catch (error) {
        if (error.response) {
        
            if (error.response.status === 404) {
                throw new Error(`No se encontro la receta con el ID: ${id} `);
            } else {
                throw new Error("Error al hacer la solicitud a la API.");
            }
        } else {
            throw new Error("Error inesperado. Por favor, intenta de nuevo más tarde.");
        }
    }
};

module.exports = infApi;


