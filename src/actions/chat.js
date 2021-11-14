/* Importaciones propias */
import {types} from '../types/types';
import {fetchWithToken} from '../helpers/fetch';
import {scrollToBottom, scrollToBottomAnimated} from '../helpers/scroll-to-bottom';

/* Obtener todos los usuarios - comienzo */
export const startChatGetUsers = () => {
    return (dispatch, getState) => {
        /* Obtener socket del store */
        const {socket} = getState().socket;

        /* Escuchar evento para obtener todos los usuarios */
        socket?.on('users-list', (users) => {
            // console.log(users);
            dispatch(chatUsersLoaded(users));
        });
    }
}

/* Obtener todos los usuarios */
export const chatUsersLoaded = (users) => ({
    type: types.chatUsersLoaded,
    payload: users
});

/* Activar chat seleccionado */
export const chatSetActive = (uidUserSelected) => ({
    type: types.chatSetActive,
    payload: uidUserSelected
});

/* Enviar mensaje personal - comienzo */
export const startChatSendMessage = (message) => {
    return (dispatch, getState) => {
        /* Obtener store */
        const {socket} = getState().socket;
        const {user} = getState().auth;
        const {uidUserChatActive} = getState().chat;

        /* Emitir evento para enviar nuevo mensaje personal */
        socket.emit('message-personal', {
            from: user.uid,
            to: uidUserChatActive,
            message
        });
    }
}

/* Escuchar evento del mensaje personal - comienzo */
export const startChatOnMessage = () => {
    return (dispatch, getState) => {
        /* Obtener socket del store */
        const {socket} = getState().socket;

        /* Escuchar evento de mensaje personal */
        socket?.on('message-personal', (message) => {
            // console.log(message);
            dispatch(chatNewMessage(message));

            /* Scroll para los nuevos mensajes personales */
            scrollToBottomAnimated('messages');
        });
    }
}

/* Guardar nuevo mensaje personal */
export const chatNewMessage = (message) => ({
    type: types.chatNewMessage,
    payload: message
});

/* Cargar mensajes de chat - comienzo */
export const startChatMessagesLoaded = (uidUserSelected) => {
    return async (dispatch) => {
        /* Cargar mensajes del chat */
        const resp = await fetchWithToken(`messages/${uidUserSelected}`);
        const data = await resp.json();

        /* Dispara acción para cargar mensajes en el store */
        dispatch(chatMessagesLoaded(data.messages));

        /* Scroll para el chat seleccionado */
        scrollToBottom('messages');
    }
}

/* Cargar mensajes del chat */
export const chatMessagesLoaded = (messages) => ({
    type: types.chatMessagesLoaded,
    payload: messages
});