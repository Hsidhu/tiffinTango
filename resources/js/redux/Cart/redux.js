import {
    GET_MEALPLAN_ORDER_DATA,
    SELECT_MEALPLAN,
    SELECT_MEALPLAN_OPTIONS,
    ADD_DELIVERY_CHARGE
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
            return  {
                deliveryCharges:0,
                tax:0.13,
                items: [action.payload],
            };
        case SELECT_MEALPLAN_OPTIONS:
            let newState = _.cloneDeep(state);
            const newOptionValue = action.payload;
            // get options with same option
            const index = newState.items.findIndex((item) => item.meal_plan_option_id === newOptionValue.meal_plan_option_id);
            if (index !== -1) {
                // Update the existing item
                newState.items[index] = newOptionValue;
            } else {
                // Add the new item to the array
                newState.items.push(newOptionValue);
            }
            return newState
        case ADD_DELIVERY_CHARGE:
            let newStateDelivery = _.cloneDeep(state);
            newStateDelivery.deliveryCharges = action.payload
            return newStateDelivery
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

export const cartTotal = (state = [], action) => {
    switch (action.type) {
        case SELECT_MEALPLAN:
            return action.payload
        case SELECT_MEALPLAN_OPTIONS:
            return action.payload
        default:
            return state
    }
}


