import {
    GET_CUSTOMERS,
    GET_CUSTOMER,
    GET_NEW_CUSTOMER,
    GET_UPDATE_CUSTOMER,
    GET_DELETE_CUSTOMER
} from "./actions"

export const customers = (state = [], action) => {
    switch (action.type) {
        case GET_CUSTOMERS:
            return action.payload
        default:
            return state
    }
}

export const customer = (state = [], action) => {
    switch (action.type) {
        case GET_CUSTOMER:
            return action.payload
        default:
            return state
    }
}

