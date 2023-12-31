import {
    GET_DRIVERS,
    GET_DRIVER,
    CREATE_DRIVER,
    UPDATE_DRIVER,
    DELETE_DRIVER,
    GET_DRIVER_SELECT
} from "./actions"

export const drivers = (state = [], action) => {
    switch (action.type) {
        case GET_DRIVERS:
            return action.payload
        default:
            return state
    }
}

export const driver = (state = {}, action) => {
    switch (action.type) {
        case GET_DRIVER:
            return action.payload
        default:
            return state
    }
}

export const driverSelect = (state = [], action) => {
    switch (action.type) {
        case GET_DRIVER_SELECT:
            return action.payload
        default:
            return state
    }
}

