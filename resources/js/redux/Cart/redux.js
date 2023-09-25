import {
    SELECT_MEALPLAN
} from './actions'


export const cart = (state = [], action) => {
    switch (action.type) {
        case SELECT_MEALPLAN:
            return action.payload
        default:
            return state
    }
}


