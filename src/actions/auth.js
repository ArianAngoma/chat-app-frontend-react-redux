/* Importaciones propias */
import {fetchNoToken} from '../helpers/fetch';

/* Inicio de sesión - comienzo */
export const startLogin = (email, password) => {
    return async (dispatch) => {
        const resp = await fetchNoToken('auth', {email, password}, 'POST');
        const data = await resp.json();
        console.log(data);
    }
}