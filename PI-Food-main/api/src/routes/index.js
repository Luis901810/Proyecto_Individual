// Importar todos los routers;

const router = require("express").Router();

const getRecipeName = require("../controllers/getRecipeName");
const getRecipesById= require("../controllers/getRecipesById");
const createRecipe = require("../controllers/createRecipe")

// Configurar los routers

router.get("/recipes/name", getRecipeName);
router.get("/recipes/:id", getRecipesById);
router.post("/createrecipe", createRecipe)

router.post("/recipes")
router.get("/diets")

module.exports = router;
