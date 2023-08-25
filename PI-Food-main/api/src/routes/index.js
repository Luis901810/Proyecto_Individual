// Importar todos los routers;

const router = require("express").Router();

const getRecipeName = require("../controllers/getRecipeName");
const getRecipesById= require("../controllers/getRecipesById");
const postCreateRecipe = require("../controllers/postCreateRecipe");
const getTypeDiets = require("../controllers/getTypeDiets")

// Configurar los routers

router.get("/recipes/name", getRecipeName);
router.get("/recipes/:id", getRecipesById);
router.post("/createrecipe", postCreateRecipe)

router.post("/recipes")
router.get("/diets, getTypeDiets")

module.exports = router;
