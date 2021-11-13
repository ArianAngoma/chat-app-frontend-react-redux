/* Importaciones propias */
import {types} from '../types/types';

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