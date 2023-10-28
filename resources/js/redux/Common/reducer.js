import {
    GET_SITE_SETTINGS,
    SET_ERRORS,
    REDIRECT_TO,
    ORDER_STATUSES,
    DELIVERY_WINDOWS,
    DELIVERY_WINDOWS_LIST,
    COOKIE_CONSENT
} from "./actions"

export const siteSettings = (state = {}, action) => {
    switch (action.type) {
        case GET_SITE_SETTINGS:
            return action.payload
        default:
            return state
    }
}

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
        case DELIVERY_WINDOWS_LIST:
            return action.payload
        default:
            return state
    }
}

export const cookieConsent = (state = false, action) => {
    switch (action.type) {
        case COOKIE_CONSENT:
            return action.payload
        default:
            return state
    }
}
