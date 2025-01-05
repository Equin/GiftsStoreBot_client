import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import userReducer from './userReducer';
import requestReducer from './requestReducer';
import plantReducer from './plantReducer';
import notificationReducer from './notificationReducer';

const rootReducer = combineReducers({
    user:userReducer,
    plant:plantReducer,
    request:requestReducer,
    notification:notificationReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));