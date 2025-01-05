import { setRequests } from '../reducers/requestReducer';
import $api from '../http';

export const getRequests = () => {

    return async dispatch => {
        try {
            // dispatch(setLoading(true));
            const response = await $api.get('/requests/get', {});

            console.log({ " getNotifications _responce_data": response.data });

            dispatch(setRequests(response.data));

        } catch (e) {
            alert(e);
        } finally {
          
        }
    }
}

export const createRequest = (plantName, userID) => {

    return async (dispatch) => {
        try {
            console.log({ "create request": plantName, userID })
            const response = await $api.post('/requests/create', {
                "name":plantName,
                userID
            });

            console.log({ "login_responce_data": response.data });

            alert("Запит на додавання рослини успішно відправлений");
        } catch (e) {
            alert(e.response.data.message);
        } finally {
           // dispatch(setLoading(false));
        }
    }
}

export const deleteRequest = (requestID) => {

    return async (dispatch) => {
        try {
            console.log({ "delete request": requestID, })
            const response = await $api.post('/requests/delete', {
                "id":requestID
            });

            console.log({ "deleteRequest": response.data });

            dispatch(setRequests(response.data));

            alert("Запит на додавання рослини успішно видалено");
        } catch (e) {
            alert(e.response.data.message);
        } finally {
           // dispatch(setLoading(false));
        }
    }
}