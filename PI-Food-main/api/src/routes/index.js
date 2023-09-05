// Importar todos los routers;

const router = require("express").Router();

const getRecipeName = require("../controllers/getRecipeName");
const getRecipesById= require("../controllers/getRecipesById");
const postCreateRecipe = require("../controllers/postCreateRecipe");
const getTypeDiets = require("../controllers/getTypeDiets")
const putRecipeUpdate = require("../controllers/putRecipeUpdate")
const deleteRecipe = require("../controllers/deleteRecipe");
const getRecipes = require("../controllers/getRecipes");
// Configurar los routers

router.get("/recipes/name", getRecipeName);
router.post("/createrecipes", postCreateRecipe)
router.get("/recipes", getRecipes)
router.get("/diets" , getTypeDiets)


router.get("/recipes/:id", getRecipesById);
router.put("/recipes/:id", putRecipeUpdate)
router.delete("/recipes/:id", deleteRecipe)


module.exports = router;
