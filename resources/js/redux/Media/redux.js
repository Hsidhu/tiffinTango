import {
    GET_MEDIA_FILES,
} from "./actions"

export const mediaFiles = (state = [], action) => {
    switch (action.type) {
        case GET_MEDIA_FILES:
            return action.payload
        default:
            return state
    }
}
