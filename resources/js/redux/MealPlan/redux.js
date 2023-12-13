import {
    GET_MEALPLANS,
    GET_MEALPLAN,
    GET_MEALPLAN_OPTIONS,
    GET_MEALPLAN_SELECT_DATA
} from "./actions"

export const mealplans = (state = [], action) => {
    switch (action.type) {
        case GET_MEALPLANS:
            return action.payload
        default:
            return state
    }
}

export const mealplan = (state = {}, action) => {
    switch (action.type) {
        case GET_MEALPLAN:
            return action.payload
        default:
            return state
    }
}

export const mealplanSelectList = (state = [], action) => {
    switch (action.type) {
        case GET_MEALPLAN_SELECT_DATA:
            return action.payload
        default:
            return state
    }
}

export const mealplanOptions = (state = [], action) => {
    switch (action.type) {
        case GET_MEALPLAN_OPTIONS:
            return action.payload
        default:
            return state
    }
}

