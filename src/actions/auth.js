/* Importaciones propias */
import {fetchNoToken, fetchWithToken} from '../helpers/fetch';
import {types} from '../types/types';
import {saveDataUser} from '../helpers/save-data-user';
import {chatClearLogout} from './chat';

/* Inicio de sesión - comienzo */
export const startLogin = (email, password) => {
    return async (dispatch) => {
        const resp = await fetchNoToken('auth', {email, password}, 'POST');
        const data = await resp.json();
        // console.log(data);

        await saveDataUser(data, dispatch);
    }
}

/* Registro de usuario - comienzo */
export const startRegister = (name, email, password) => {
    return async (dispatch) => {
        const resp = await fetchNoToken('auth/register', {name, email, password}, 'POST');
        const data = await resp.json();
        // console.log(data);

        await saveDataUser(data, dispatch);
    }
}

/* Inicio de sesión */
export const authLogin = (user) => ({
    type: types.authLogin,
    payload: user
});

/* Validar Token */
export const startChecking = () => {
    return async (dispatch) => {
        const resp = await fetchWithToken('auth/renew');
        const data = await resp.json();
        // console.log(data);

        if (data.ok) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            /* Inicio de sesión */
            dispatch(authLogin(data.user));
        } else {
            dispatch(authCheckingFinish());
        }
    }
}

/* Finaliza la carga si el usuario ya esta logueado */
export const authCheckingFinish = () => ({
    type: types.authCheckingFinish
});

/* Logout de usuario - comienzo */
export const startLogout = () => {
    return (dispatch) => {
        localStorage.clear();

        /* Dispara acción para limpiar el store del chat */
        dispatch(chatClearLogout());

        /* Logout */
        dispatch(logout());
    }
}

/* Logout de usuario */
export const logout = () => ({
    type: types.authLogout
});