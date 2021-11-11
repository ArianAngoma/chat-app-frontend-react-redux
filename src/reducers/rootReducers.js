import {combineReducers} from 'redux';

/* Importaciones propias */
import {authReducer} from './authReducer';

export const rootReducers = combineReducers({
    auth: authReducer
});