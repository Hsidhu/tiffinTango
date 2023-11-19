import actions from '../Authenticate/actions';

const initialState = {
    isAuthenticated: false,
    loader: false,
    email: null,
    name: null,
    validateUserLoader: true,
    logOutLoader: false,
    token: '',
    userType:null
}

function Reducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_AUTH_USER:
            return { ...state, validateUserLoader: true }
        case actions.GET_AUTH_USER_SUCCESS:
            return {
                ...state,
                validateUserLoader: false,
                isAuthenticated: !!action.payload.user.email,
                email: action.payload.user.email,
                name: action.payload.user.name,
                userType: action.payload.user.userType
            }
        case actions.GET_AUTH_USER_FAILURE:
            return {
                ...state,
                isAuthenticated: false,
                validateUserLoader: false,
                email: null,
                name: null,
                userType:null
            }
        case actions.LOGIN:
            return { ...state, loader: true }
        case actions.LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: !!action.payload.user.email,
                loader: false,
                email: action.payload.user.email,
                name: action.payload.user.name,
                userType: action.payload.user.userType
            }
        case actions.LOGIN_FAILURE:
            return { ...state, isAuthenticated: false, loader: false }
        case actions.LOGOUT:
            return { ...state, logOutLoader: true }
        case actions.LOGOUT_SUCCESS:
            return { ...state, isAuthenticated: false, logOutLoader: false }
        case actions.LOGOUT_FAILURE:
            return { ...state, isAuthenticated: false, logOutLoader: false }
        case actions.REGISTER:
            return { ...state, registerLoader: true }
        case actions.REGISTER_SUCCESS:
            return {
                ...state,
                isAuthenticated: !!action.payload.user.email,
                registerLoader: false,
                email: action.payload.user.email,
                name: action.payload.user.name,
            }
        case actions.REGISTER_FAILURE:
            return { ...state, isAuthenticated: false, registerLoader: false }
        default:
            return state
    }
}

export default Reducer;
