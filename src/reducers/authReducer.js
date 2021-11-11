/* Importaciones propias */
import {types} from '../types/types'

/* Estado inicial */
const initialState = {
    checking: true,
    user: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        /* Guardar usuario en el store */
        case types.authLogin:
            return {
                ...state,
                checking: false,
                user: {...action.payload}
            }
        default:
            return state;
    }
}