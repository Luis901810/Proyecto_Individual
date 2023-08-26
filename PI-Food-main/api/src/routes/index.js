// Importar todos los routers;

const router = require("express").Router();

const getRecipeName = require("../controllers/getRecipeName");
const getRecipesById= require("../controllers/getRecipesById");
const postCreateRecipe = require("../controllers/postCreateRecipe");
const getTypeDiets = require("../controllers/getTypeDiets")
const putRecipeUpdate = require("../controllers/putRecipeUpdate")
const deleteRecipe = require("../controllers/deleteRecipe")
// Configurar los routers

router.get("/recipes/name", getRecipeName);
router.get("/recipes/:id", getRecipesById);
router.post("/createrecipe", postCreateRecipe)
router.get("/diets" , getTypeDiets)


router.put("/recipes/:id", putRecipeUpdate)
router.delete("/recipes/:id", deleteRecipe)


module.exports = router;
