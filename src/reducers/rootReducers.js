import {combineReducers} from 'redux';

/* Importaciones propias */
import {authReducer} from './authReducer';
import {socketReducer} from './socketReducer';
import {chatReducer} from './chatReducer';

export const rootReducers = combineReducers({
    auth: authReducer,
    socket: socketReducer,
    chat: chatReducer
});