import {
    GET_ORDERS,
    GET_ORDER,
    DAILY_DELIVERIES
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


export const dailyDeliveries = (state = [], action) => {
    switch (action.type) {
        case DAILY_DELIVERIES:
            return action.payload
        default:
            return state
    }
}

