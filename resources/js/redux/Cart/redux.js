import {
    GET_MEALPLAN_ORDER_DATA,
    SET_ORDER_TYPE,
    CLEAR_CART_ITEMS,
    SELECT_MEALPLAN,
    SELECT_MEALPLAN_OPTIONS,
    ADD_DELIVERY_CHARGE,
    ORDER_NEXT_STEP_TRACK,
    ORDER_PREV_STEP_TRACK,
    ORDER_RESET_STEP_TRACK
} from './actions'

import {
    CLEAR_FRONTEND_DATA
} from '../Common/actions'

export const orderData = (state = [], action) => {
    switch (action.type) {
        case GET_MEALPLAN_ORDER_DATA:
            return action.payload
        default:
            return state
    }
}

export const orderType = (state = 'pickup', action) => {
    switch (action.type) {
        case SET_ORDER_TYPE:
            return action.payload
        default:
            return state
    }
}

export const cart = (state = {}, action) => {
    switch (action.type) {
        case SELECT_MEALPLAN:
            return  {
                deliveryCharges:0,
                tax:0.13,
                items: [{...action.payload, selectedOptions:[]}, ],
            };
        case SELECT_MEALPLAN_OPTIONS:
            let newState = _.cloneDeep(state);
            const newOptionValue = action.payload;
            // get options with same option
            const index = newState.items[0].selectedOptions.findIndex((item) => item.meal_plan_option_id === newOptionValue.meal_plan_option_id);
            if (index !== -1) {
                // Update the existing item
                newState.items[0].selectedOptions[index] = newOptionValue;
            } else {
                // Add the new item to the array
                newState.items[0].selectedOptions.push(newOptionValue);
            }
            return newState
        case ADD_DELIVERY_CHARGE:
            let newStateDelivery = _.cloneDeep(state);
            newStateDelivery.deliveryCharges = action.payload
            return newStateDelivery
        case CLEAR_CART_ITEMS:
            return action.payload
        case CLEAR_FRONTEND_DATA:
            return state
        default:
            return state
    }
}

export const selectedMealPlan = (state = {}, action) => {
    switch (action.type) {
        case SELECT_MEALPLAN:
            return { ...action.payload, selectedOptions:[] }
        case SELECT_MEALPLAN_OPTIONS:
            let newState = _.cloneDeep(state);
            const newOptionValue = action.payload;
            // get options with same option
            const index = newState.selectedOptions.findIndex((item) => item.meal_plan_option_id === newOptionValue.meal_plan_option_id);
            if (index !== -1) {
                // Update the existing item
                newState.selectedOptions[index] = newOptionValue;
            } else {
                // Add the new item to the array
                newState.selectedOptions.push(newOptionValue);
            }
            return newState
        case CLEAR_CART_ITEMS:
            return action.payload
        case CLEAR_FRONTEND_DATA:
            return state
        default:
            return state
    }
}

export const orderSummary = (state = [], action) => {
    switch (action.type) {
        case SELECT_MEALPLAN:
            return action.payload
        case CLEAR_FRONTEND_DATA:
            return state
        default:
            return state
    }
}

export const cartTotal = (state = [], action) => {
    switch (action.type) {
        case SELECT_MEALPLAN:
            return action.payload
        case SELECT_MEALPLAN_OPTIONS:
            return action.payload
        case CLEAR_FRONTEND_DATA:
            return state
        default:
            return state
    }
}


export const stepReducer = (state = {currentStep:0}, action) => {
    switch (action.type) {
        case ORDER_NEXT_STEP_TRACK:
            return {
                ...state,
                currentStep: state.currentStep + 1,
            };
        case ORDER_PREV_STEP_TRACK:
            return {
                ...state,
                currentStep: state.currentStep - 1,
            };
        case ORDER_RESET_STEP_TRACK:
            return {
                ...state,
                currentStep: 0,
            };
      default:
        return state;
    }
};

