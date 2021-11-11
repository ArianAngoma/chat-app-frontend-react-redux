/* Importaciones propias */
import {types} from '../types/types';

/* Guardar socket en el store */
export const socketSetStore = (socket, online) => ({
    type: types.socketSetStore,
    payload: {socket, online}
});