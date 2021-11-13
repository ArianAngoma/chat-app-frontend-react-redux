/* Importaciones propias */
import {types} from '../types/types';

/* Estado inicial */
const initialState = {
    uid: '',
    chatActive: null, // uid del usuario que quiero enviar mensajes
    users: [], // Todos los usuario de la DB
    messages: [] // Mensajes del chat seleccionado
}

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.chatUsersLoaded:
            return {
                ...state,
                users: [...action.payload]
            }
        default:
            return state;
    }
}