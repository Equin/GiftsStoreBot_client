import { setNotifications } from '../reducers/notificationReducer';
import $api from '../http';

export const getNotifications = (userID, month, year) => {

    return async dispatch => {
        try {
            // dispatch(setLoading(true));
            const response = await $api.get('/plants/getNotifications', {
                params: {
                    userID: userID,
                    year: year,
                    month: month
                }
            });

            console.log({ " getNotifications _responce_data": response.data });

            dispatch(setNotifications(response.data));

        } catch (e) {
            alert(e);
        } finally {
          
        }
    }
}