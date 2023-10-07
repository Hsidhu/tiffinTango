import {
    GET_SETTINGS,
    SAVE_SETTINGS
} from "./actions"

export const settings = (state = [], action) => {
    switch (action.type) {
        case GET_SETTINGS:
            return action.payload
        case SAVE_SETTINGS:
            return action.payload
        default:
            return state
    }
}
