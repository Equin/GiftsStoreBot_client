import { setPlant, setPlants, setLoading, setSearchPlants, setCharacteristics, setFrequency, setPlantCharacteristics, setCalendarInfo } from '../reducers/plantReducer';
import $api from '../http';

export const create = (formData) => {

    console.log("called")
    return async (dispatch) => {
        try {

            console.log("not called")
            console.log({ "create_plant": formData })


            const response = await $api.post('/plants/create', formData);

            console.log({ "login_responce_data": response.data });

            alert("Рослина успішно додана");
        } catch (e) {
            alert(e.response.data.message);
        } finally {
            dispatch(setLoading(false));
        }
    }
}

export const update = (formData) => {

    return async dispatch => {
        try {

            const response = await $api.post('/plants/update', formData);
            console.log({ "login_responce_data": response.data });

            dispatch(setPlant(response.data));

        } catch (e) {
            alert(e);
        } finally {
            dispatch(setLoading(false));
        }
    }
}

// create function for deleting plant by id 
export const deletePlant = (id) => {

    return async dispatch => {
        try {

            const response = await $api.post('/plants/delete', {
                id
            });

            console.log({ "deletePlant": response.data });

            dispatch(setPlant({}));
            dispatch(setPlants(response.data));

        } catch (e) {
            alert(e);
        } finally {
            dispatch(setLoading(false));
        }
    }
}

export const setEnabled = (plantID, isEnabled) => {
    return async dispatch => {
        try {
            dispatch(setLoading(true));
            const response = await $api.post('/plants/enable', {
                id: plantID,
                isEnabled
            });

            dispatch(setPlant(response.data));

        } catch (e) {
            alert(e);
        } finally {
            dispatch(setLoading(false));
        }
    }
}


export const getSearchPlants = (page, searchText, characteristics = {}) => {

    return async dispatch => {
        try {
            // dispatch(setLoading(true));
            const response = await $api.get('/plants/get', {
                params: {
                    options: JSON.stringify(characteristics),
                    searchText: searchText,
                    page: page,
                    limit: 10
                }
            });

            console.log({ "login_responce_data": response.data });

            dispatch(setSearchPlants(response.data));

        } catch (e) {
            alert(e);
        } finally {
            dispatch(setLoading(false));
        }
    }
}

export const getPlants = (userID, page) => {
    return async dispatch => {
        try {
            //  dispatch(setLoading(true));
            const response = await $api.get('/plants/get', {
                params: {
                    page: page,
                    limit: 10
                }
            });

            console.log({ "login_responce_data": response.data });

            dispatch(setPlants(response.data));

        } catch (e) {
            alert(e);
        } finally {
            dispatch(setLoading(false));
        }
    }
}

export const getCharacteristics = () => {
    return async dispatch => {
        try {
            //  dispatch(setLoading(true));
            const response = await $api.get('/plants/getCharacteristics', {});
            console.log({ "login_responce_data": response.data });

            dispatch(setCharacteristics(response.data));

        } catch (e) {
            alert(e);
        } finally {
            dispatch(setLoading(false));
        }
    }
}

export const getPlantCharacteristicsByID = (id) => {
    return async dispatch => {
        try {
            //  dispatch(setLoading(true));
            const response = await $api.get('/plants/getPlantCharacteristics', {
                params: {
                    id: id
                }
            });
            console.log({ "plant_characteristics": response.data });

            dispatch(setPlantCharacteristics(response.data));

        } catch (e) {
            alert(e);
        } finally {
            dispatch(setLoading(false));
        }
    }
}

export const getCalendarInfo = (userID, year, month) => {
    return async dispatch => {
        try {
            //  dispatch(setLoading(true));
            const response = await $api.get('/plants/getCalendarInfo', {
                params: {
                    userID: userID,
                    year: year,
                    month: month
                }
            });

            console.log({ "getCalendarInfo": response.data });

            dispatch(setCalendarInfo(response.data));

        } catch (e) {
            alert(e);
        } finally {
            dispatch(setLoading(false));
        }
    }
}





export const getFrequency = () => {
    return async dispatch => {
        try {
            //  dispatch(setLoading(true));
            const response = await $api.get('/plants/getFrequency', {});
            console.log({ "login_responce_data": response.data });

            const s = response.data.map((item) => {

                var key = item.id;
                var value = item.name;

                return { key, value };
            });


            dispatch(setFrequency(s));

        } catch (e) {
            alert(e);
        } finally {
            dispatch(setLoading(false));
        }
    }
}


export const getUserPlants = (userID, page) => {
    return async dispatch => {
        try {
            //  dispatch(setLoading(true));
            const response = await $api.get('/plants/getForUser', {
                params: {
                    userID: userID,
                    page: page,
                    limit: 10
                }
            });
            console.log({ "login_responce_data": response.data });

            dispatch(setPlants(response.data));

        } catch (e) {
            alert(e);
        } finally {
            dispatch(setLoading(false));
        }
    }
}

export const getPlant = (userID, id) => {
    return async dispatch => {
        try {
            console.log({ "plant_fetch data": userID });
            //  dispatch(setLoading(true));
            const response = await $api.get('/plants/getOne', {
                params: {
                    userID: userID,
                    id: id
                }
            });
            console.log({ "plant_responce_data": response.data });

            dispatch(setPlant(response.data));

        } catch (e) {
            alert(e);
        } finally {
            dispatch(setLoading(false));
        }
    }
}

export const addTouser = (plantID, userID, isFavorite) => {
    return async dispatch => {
        try {
            console.log({ "plant_fetch data": userID });
            //  dispatch(setLoading(true));
            const response = await $api.post('/plants/addToUser', {
                userID: userID,
                id: plantID,
                isFavorite: isFavorite
            });

            console.log({ "plant_responce_data": response.data });

            dispatch(setPlant(response.data));

        } catch (e) {
            alert(e);
        } finally {
            dispatch(setLoading(false));
        }
    }
}