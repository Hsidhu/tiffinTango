import {
    GET_DELIVERY_ZONES,
    GET_DELIVERY_ZONE,
    CREATE_DELIVERY_ZONE,
    UPDATE_DELIVERY_ZONE,
    DELETE_DELIVERY_ZONE
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

