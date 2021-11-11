import {combineReducers} from 'redux';

/* Importaciones propias */
import {authReducer} from './authReducer';
import {socketReducer} from './socketReducer';

export const rootReducers = combineReducers({
    auth: authReducer,
    socket: socketReducer
});