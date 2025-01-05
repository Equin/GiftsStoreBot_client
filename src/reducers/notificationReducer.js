const SET_NOTIFICATIONS = "SET_NOTIFICATIONS";

const defaultState = {
    notifications: []
}

export default function notificationReducer(state = defaultState, action) {
    switch (action.type) {

        case SET_NOTIFICATIONS:
            return {
                ...state,
                notifications: action.payload
            }

        default:
            return state;
    }
}

export const setNotifications = (notifications) => ({ type: SET_NOTIFICATIONS, payload: notifications });
