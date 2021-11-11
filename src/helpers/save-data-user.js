import Swal from 'sweetalert2';

/* Importaciones propias */
import {authLogin} from '../actions/auth';

export const saveDataUser = (data, dispatch) => {
    if (data.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('token-init-date', new Date().getTime());

        dispatch(authLogin(data.user));
    } else {
        if (data.msg) Swal.fire('Error', data.msg, 'error');
        else {
            for (const error in data.errors) {
                // console.log(data.errors[error].msg)
                Swal.fire('Error', data.errors[error].msg, 'error');
            }
        }
    }
}