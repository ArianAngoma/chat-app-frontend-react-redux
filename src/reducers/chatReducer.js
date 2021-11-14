/* Importaciones propias */
import {types} from '../types/types';

/* Estado inicial */
const initialState = {
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
        /* Guardar mensaje nuevo en el state */
        case types.chatNewMessage:
            /* Si tenemos el chat activo de la persona que nos envió el mensaje debe de guardese en el state de messages, si no lo tenemos, no es necesario */
            if (state.uidUserChatActive === action.payload.from || state.uidUserChatActive === action.payload.to) {
                return {
                    ...state,
                    messages: [...state.messages, action.payload]
                }
            } else {
                return state;
            }
        /* Cargar mensajes del chat en el store */
        case types.chatMessagesLoaded:
            return {
                ...state,
                messages: [...action.payload]
            }
        /* Limpiar store al hacer logout */
        case types.chatClearLogout:
            return initialState;
        default:
            return state;
    }
}