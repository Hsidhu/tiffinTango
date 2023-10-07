import {
    GET_ORDERS
} from "./actions"

export const orders = (state = [], action) => {
    switch (action.type) {
        case GET_ORDERS:
            return action.payload
        default:
            return state
    }
}

