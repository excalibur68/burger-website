import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initalState = {
    ingredients: null,
    totalPrice: 4,
    error: false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const addIngredient = (state, action) => {
    const addedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1};
    const addedIngredients = updateObject(state.ingredients, addedIngredient);
    const addedState = { 
            ingredients: addedIngredients,
            totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName] 
    }
    return updateObject(state, addedState);
};

const removeIngredient = (state, action) => {
    const removedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] - 1};
    const removedIngredients = updateObject(state.ingredients, removedIngredient);
    const removedState = { 
            ingredients: removedIngredients,
            totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName] 
    }
    return updateObject(state, removedState);
};

const setIngredient = (state, action) => {
    const setIngredients = { 
        ingredients: {
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat
        },
        totalPrice: 4,
        error: false
     };
    return updateObject(state, setIngredients);
};

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: 
            return addIngredient (state, action);
        case actionTypes.REMOVE_INGREDIENT:
            return removeIngredient (state, action);
        case actionTypes.SET_INGREDIENTS:
            return setIngredient (state, action);
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return updateObject(state, {error: true}); 
        default:
            return state;
    }
};

export default reducer;
