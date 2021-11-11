/* Importaciones propias */
import {types} from '../types/types'

/* Estado inicial */
const initialState = {
    socket: null,
    online: false
};

export const socketReducer = (state = initialState, action) => {
    switch (action.type) {
        /* Guardar socket en el store */
        case types.socketSetStore:
            return {
                ...state,
                socket: action.payload.socket,
                online: action.payload.online
            }
        default:
            return state;
    }
}