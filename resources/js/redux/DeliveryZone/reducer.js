import {
    GET_DELIVERY_ZONES,
    GET_DELIVERY_ZONE,
    CREATE_DELIVERY_ZONE,
    UPDATE_DELIVERY_ZONE,
    DELETE_DELIVERY_ZONE,
    DELIVERY_WINDOWS_SELECT_LIST
} from "./actions"

export const deliveryZones = (state = [], action) => {
    switch (action.type) {
        case GET_DELIVERY_ZONES:
            return action.payload
        default:
            return state
    }
}

export const deliveryZone = (state = {}, action) => {
    switch (action.type) {
        case GET_DELIVERY_ZONE:
            return action.payload
        default:
            return state
    }
}

export const deliveryZoneList = (state = {}, action) => {
    switch (action.type) {
        case DELIVERY_WINDOWS_SELECT_LIST:
            return action.payload
        default:
            return state
    }
}

