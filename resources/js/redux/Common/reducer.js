import { 
    SET_ERRORS,
    REDIRECT_TO,
    ORDER_STATUSES,
    DELIVERY_WINDOWS
} from "./actions"

export const errors = (state = {}, action) => {
    switch (action.type) {
        case SET_ERRORS:
            return action.payload
        default:
            return state
    }
}

export const redirectTo = (state = '', action) => {
    switch (action.type) {
        case REDIRECT_TO:
            return action.payload
        default:
            return state
    }
}

export const orderStatuses = (state = [], action) => {
    switch (action.type) {
        case ORDER_STATUSES:
            return action.payload
        default:
            return state
    }
}

export const deliveryWindows = (state = [], action) => {
    switch (action.type) {
        case DELIVERY_WINDOWS:
            return action.payload
        default:
            return state
    }
}
