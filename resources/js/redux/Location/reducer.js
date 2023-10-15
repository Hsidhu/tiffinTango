import {
    GET_LOCATIONS,
    GET_LOCATION,
    GET_NEW_LOCATION,
    GET_UPDATE_LOCATION,
    GET_DELETE_LOCATION
} from "./actions"

export const locations = (state = [], action) => {
    switch (action.type) {
        case GET_LOCATIONS:
            return action.payload
        default:
            return state
    }
}

export const location = (state = [], action) => {
    switch (action.type) {
        case GET_LOCATION:
            return action.payload
        default:
            return state
    }
}

