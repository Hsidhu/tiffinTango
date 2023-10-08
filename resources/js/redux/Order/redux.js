import {
    GET_ORDERS,
    GET_ORDER
} from "./actions"

export const orders = (state = [], action) => {
    switch (action.type) {
        case GET_ORDERS:
            return action.payload
        default:
            return state
    }
}

export const order = (state = {}, action) => {
    switch (action.type) {
        case GET_ORDER:
            return action.payload
        default:
            return state
    }
}

