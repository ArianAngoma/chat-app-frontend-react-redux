/* Importaciones propias */
import {fetchNoToken} from '../helpers/fetch';
import {types} from '../types/types';
import {saveDataUser} from '../helpers/save-data-user';

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