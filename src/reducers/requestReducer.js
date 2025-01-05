const SET_REQUESTS = "SET_REQUESTS";

const defaultState = {
    requests: []
}

export default function requestReducer(state = defaultState, action) {
    switch (action.type) {

        case SET_REQUESTS:
            return {
                ...state,
                requests: action.payload
            }

        default:
            return state;
    }
}

export const setRequests = (requests) => ({ type: SET_REQUESTS, payload: requests });
