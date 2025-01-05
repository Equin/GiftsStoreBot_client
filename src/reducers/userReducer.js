const SET_USER = "SET_USER";
const SET_USERS = "SET_USERS";
const LOGOUT = "LOGOUT";
const LOADING = "LOADING";

const defaultState = {
        currentUser:{},
        users:{},
        isAuth: false,
        isLoading: true
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true,
                isLoading: false
            }
        case SET_USERS:
            return {
                ...state,
                users: action.payload,
                isLoading: false
            }

        case LOGOUT:
            return {
                ...state,
                currentUser: {},
                isAuth: false,
                isLoading: false
            }

        case LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state;
    }
}

export const setUser = (user) => ({type:SET_USER, payload:user});

export const setUsers = (users) => ({type:SET_USERS, payload:users});

export const setLoading = (isLoading) => ({type:LOADING, payload: isLoading});

export const logout = () => ({type:LOGOUT});