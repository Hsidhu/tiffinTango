import { SET_ERRORS } from "./actions"

export const errors = (state = {}, action) => {
    switch (action.type) {
        case SET_ERRORS:
            return action.payload
        default:
            return state
    }
}
