// Importar todos los routers;

const router = require("express").Router();
const getRecetasById = require("../controllers/getRecipesById");
const getRecipeName = require("../controllers/getRecipeName");


// Configurar los routers
router.get("/recipes/name", getRecipeName);
router.get("/recipes/:id", getRecetasById);
router.post("/recipes")
router.get("/diets")

module.exports = router;
