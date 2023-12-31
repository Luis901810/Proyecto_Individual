import axios from "axios"
import { GET_RECIPE_ALL, GET_RECIPE_NAME,
         RECIPE_ID, CREATE_RECIPE, UPWARD_OR_FALLING,
         RESET_RECIPE_ID, ADD_TYPE_DIET,
         UPWARD_OR_FALLING_TITLE,FILTER_FOR_DIET, FILTER_HEALTH_SCORE, 
         FILTER_FOR_STORAGE, LOADING } from "./actions_types";

const URLNAME="http://localhost:3001/recipes?name";
const URLDIET ="http://localhost:3001/diets";
const URLCREATE ="http://localhost:3001/createrecipes";
const URL="http://localhost:3001/recipes";


            // todos los recipes 
export const recipesAll = () =>{
    return async function(dispatch){

        try {
            dispatch(loading(true))
             const response = await axios(`${URL}`)
                                
            return dispatch({
                type: GET_RECIPE_ALL,
                payload: response.data
            })
                                
        } catch (error) {
            throw new Error(`Error al cargar las Recetas: ${error.message}`)
             }finally{
                dispatch(loading(false))
            }
    }
}    


         // recipes por nombre

export const recipeName = (name) =>{
    return  async function(dispatch){
        try {
           dispatch(loading(true))
            let { data } = await axios(`${URLNAME}=${name}`)
            
            return dispatch({
                type: GET_RECIPE_NAME,
                payload: data
            })
            
        } catch (error) {
            throw new Error(`Error al encontrar recetas por nombre: ${error.message}`)
        }
        finally{
             dispatch(loading(false))
        }

    }
}

//  limpiar detail

export const resetRecipeId = () =>{
    return{
        type:RESET_RECIPE_ID,
    }
}

// agregar tipos de dietas

export const addTypeRecipe = () =>{
    return async function(dispatch){
        try {
            let { data } = await axios(`${URLDIET}`)
            return dispatch({
                type: ADD_TYPE_DIET,
                payload: data
            })
            
        } catch (error) {
            throw new Error(`error al agregar tipos de dietas: ${error.message}`)
            
        }
    }
}

// crear nuevas recetas 

export const createRecipe = (input) =>{
    return async (dispatch) => {
        try {

            const { data } = await axios.post(`${URLCREATE}`, input)
            return dispatch({
                type: CREATE_RECIPE,
                payload: data
            })
            
        } catch (error) {
            throw new Error(`error al crear una receta: ${error.message}`)
        }
    }
}


export const  upwardOrfalling = (order) =>{
    return {
        type:UPWARD_OR_FALLING,
        payload: order
    }
}
 export const upwardOrfallingTitle = (order) =>{
    return {
        type: UPWARD_OR_FALLING_TITLE,
        payload: order
    }
 }

 // API O BD

 export const filterForStorage = (Storage) =>{
    return{
        type: FILTER_FOR_STORAGE,
        payload: Storage
    }
 }

 // tipos Diet

 export const filterForDiet = (diet) =>{

    return {
        type: FILTER_FOR_DIET,
        payload: diet
    }
 }



 export const filterHealthScore = (healthscore) =>{
    return {
        type : FILTER_HEALTH_SCORE,
        payload: healthscore
    }
 }

export const loading=(stateLoading)=>{

    return {
        type:LOADING,
        payload:stateLoading}

}
export const recipeId = (id) =>{
    return   async function(dispatch){
        try {
           dispatch(loading(true))
            const response =  await axios.get(`${URL}/${id}`)

            return dispatch({
                type: RECIPE_ID,
                payload :response.data
                
            })
            

        } catch (error) {
            throw new Error(`error al buscar recetas por ID: ${error.message}`)
         
        }finally{
            dispatch(loading(false))
        }
    }
}
