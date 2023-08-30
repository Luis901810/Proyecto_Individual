import {
    GET_RECIPE_ALL, GET_RECIPE_NAME, RECIPE_ID, RESET_RECIPE_ID, ADD_TYPE_DIET,
    CREATE_RECIPE, UPWARD_OR_FALLING, UPWARD_OR_FALLING_TITLE, FILTER_FOR_STORAGE,
    FILTER_FOR_DIET, FILTER_HEALTH_SCORE, LOADING
} from './actions_types';

import { sumaUnicode } from './unicoides';

const initialState = {
    recipe: [],
    recipeName: [],
    recipeFilter: [],
    recipeFilterAll: [],
    recipeFilterDiets: [],
    recipeFilterHealthScore: [],
    recipeDetail: {},
    typesDiets: [],
    createRecipe: [],
    loading: true
};

// Función auxiliar para actualizar el estado de las recetas
const updateRecipeState = (state, payload) => ({
    ...state,
    recipe: payload,
    recipeFilter: payload,
    recipeName: payload,
    loading: false
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECIPE_ALL:
            return updateRecipeState(state, action.payload);

        case GET_RECIPE_NAME:
            return updateRecipeState(state, action.payload);

        case RECIPE_ID:
            return {
                 ...state,
                 recipeDetail: action.payload,
                 loading: false 
                };

        case RESET_RECIPE_ID:
            return { ...state, recipeDetail: {} };

        case ADD_TYPE_DIET:
            return { ...state, typesDiets: action.payload };

        case CREATE_RECIPE:
            return {
                 ...state,
                  createRecipe: [...state.createRecipe, action.payload] };
        case UPWARD_OR_FALLING_TITLE: {
             if (action.payload === 'A-Z') {
                 const filterNameA = state.recipeFilter.sort((a, b) => a.title.localeCompare(b.title));
                 return updateRecipeState(state, filterNameA);
                 } else if (action.payload === 'Z-A') {
                const filterNameD = state.recipeFilter.sort((a, b) => b.title.localeCompare(a.title));
                return updateRecipeState(state, filterNameD);
             }
            return state;
        }         
                
        case UPWARD_OR_FALLING: {
            const { payload } = action;
            const [stringId, numberId] = state.recipeFilter.reduce(
                (acc, ele) => (typeof ele.id === 'string' 
                ? [acc[0].concat(ele), acc[1]] 
                : [acc[0], acc[1].concat(ele)]),
                [[], []]
            );

            if (payload === 'Ascendente') {
                const ordenBD = stringId.sort((a, b) => sumaUnicode(a.id, 0) - sumaUnicode(b.id, 0));
                const ordenMenorMayor = numberId.sort((a, b) => a.id - b.id);
                return updateRecipeState(state, [...ordenBD, ...ordenMenorMayor]);
            } else if (payload === 'Descendente') {
                const ordenBD = stringId.sort((a, b) => sumaUnicode(b.id, 0) - sumaUnicode(a.id, 0));
                const ordenMayorMenor = numberId.sort((a, b) => b.id - a.id);
                return updateRecipeState(state, [...ordenMayorMenor, ...ordenBD]);
            }
            return state;
        }

        case FILTER_FOR_STORAGE: {
            let api = [];
            let baseDatos = [];
            state.recipeFilterAll.map(ele => (typeof ele.id === 'string' ? baseDatos.push(ele) : api.push(ele)));
            if (action.payload === 'API') {
                return {
                    ...state,
                    recipe: [...api],
                    recipeFilter: [...api],
                    recipeFilterDiets: [...api],
                    recipeName: [...api]
                };
            } else if (action.payload === 'BASE DE DATOS') {
                return {
                    ...state,
                    recipe: [...baseDatos],
                    recipeFilter: [...baseDatos],
                    recipeFilterDiets: [...baseDatos],
                    recipeName: [...baseDatos]
                };
            }
            return state;
        }

        case FILTER_FOR_DIET: {
            const diet = action.payload;
            const recipeForDiet = state.recipeFilterDiets.filter(element => element.diets.includes(diet));
        
            return {
                ...state,
                recipe: [...recipeForDiet],
                recipeFilter: [...recipeForDiet],
                recipeName: [...recipeForDiet]
            };
        }

        case FILTER_HEALTH_SCORE: {
            const array = state.recipeFilter.length !== state.recipeFilterHealthScore.length
            ? state.recipeFilter
            : state.recipeFilterHealthScore;
    
        const sortedArray = action.payload === 'Ascendente'
            ? array.sort((a, b) => a.healthScore - b.healthScore)
            : array.sort((a, b) => b.healthScore - a.healthScore);
    
        return updateRecipeState(state, sortedArray);
    }
      

        case LOADING:
            return { 
                ...state,
                loading: action.payload };

        default:
            return state;
    }
};

export default reducer;
