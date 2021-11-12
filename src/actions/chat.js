/* Obtener todos los usuarios - comienzo */
export const startGetUsers = () => {
    return (dispatch, getState) => {
        /* Obtener socket del store */
        const {socket} = getState().socket;

        /* Escuchar evento para obtener todos los usuarios */
        socket?.on('users-list', (users) => {
            console.log(users);
        });
    }
}