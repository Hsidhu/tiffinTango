import {
    GET_MEALPLAN_ORDER_DATA,
    SELECT_MEALPLAN,
    SELECT_MEALPLAN_OPTIONS
} from './actions'

export const orderData = (state = [], action) => {
    switch (action.type) {
        case GET_MEALPLAN_ORDER_DATA:
            return action.payload
        default:
            return state
    }
}

export const cart = (state = {}, action) => {
    switch (action.type) {
        case SELECT_MEALPLAN:
            return {...action.payload, options:[]}
        case SELECT_MEALPLAN_OPTIONS:
            let newState = _.cloneDeep(state);
            const newOptionValue = action.payload;
            // get options with same option
            const index = newState.options.findIndex((item) => item.meal_plan_option_id === newOptionValue.meal_plan_option_id);
            if (index !== -1) {
                // Update the existing item
                newState.options[index] = newOptionValue;
            } else {
                // Add the new item to the array
                newState.options.push(newOptionValue);
            }
            return newState
        default:
            return state
    }
}


export const orderSummary = (state = [], action) => {
    switch (action.type) {
        case SELECT_MEALPLAN:
            return action.payload
        default:
            return state
    }
}


