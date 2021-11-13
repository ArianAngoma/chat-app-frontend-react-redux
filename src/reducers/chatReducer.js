/* Importaciones propias */
import {types} from '../types/types';

/* Estado inicial */
const initialState = {
    uid: '',
    uidUserChatActive: null, // uid del usuario que quiero enviar mensajes
    users: [], // Todos los usuario de la DB
    messages: [] // Mensajes del chat seleccionado
}

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        /* Guardar los usuarios en el Store */
        case types.chatUsersLoaded:
            return {
                ...state,
                users: [...action.payload]
            }
        /* Activar chat seleccionado */
        case types.chatSetActive:
            /* Retornar el mismo estado si se desea activar otra vez el mismo chat */
            if (state.uidUserChatActive === action.payload) return state;

            return {
                ...state,
                uidUserChatActive: action.payload,
                messages: []
            }
        default:
            return state;
    }
}