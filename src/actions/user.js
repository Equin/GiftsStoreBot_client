import axios from 'axios';
import { setUser, setUsers, logout, setLoading } from '../reducers/userReducer';
import $api from '../http';
import { redirect } from 'react-router-dom';

export const fetchUsers = async () => {
    return async dispatch => {
        try {
            const response = await $api.post('/users');

            console.log({"users_responce" : response.data});
        
            dispatch(setUsers(response.data.users));

            alert(response.data);
        } catch (e) {
            alert(e.response.data.message);
        }
    }
}


export const registration = (email, password, full_name) => {
    return async dispatch => {
        try {
            const response = await $api.post('/registration', {
                email,
                password,
                full_name
            });

            localStorage.setItem('token', response.data.accessToken);
            dispatch(setUser(response.data.user));
        } catch (e) {
            alert(e.response.data.message);
        }
    }
}

export const login = (email, password) => {
  
    return async dispatch => {
        try {
            const response = await $api.post('/login', {
                email,
                password
            });
           
            localStorage.setItem('token', response.data.accessToken);
            redirect('/');
            dispatch(setUser(response.data.user));
        } catch (e) {
          
            alert(e.response.data.message);
        }
    }
}

export const logOut = () => {

    return async dispatch => {
        try {
            await $api.post('/logout');
            localStorage.removeItem('token');
            dispatch(logout());
        
        } catch (e) {
            alert(e);
        }
    }
}

export const checkAuth = () => {
   
    return async dispatch => {
        try {
            //dispatch(setLoading(true));
         
            const response = await axios.get('http://localhost:5000/api/refresh', {withCredentials: true});
            dispatch(setUser(response.data.user));
            localStorage.setItem('token', response.data.accessToken);
       
        } catch (e) {
            alert(e.response.data.message);
            localStorage.removeItem('token');
        } finally {
            dispatch(setLoading(false));
        }
    }
}