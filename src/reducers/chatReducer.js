/* Estado inicial */
const initialState = {
    uid: '',
    chatActive: null, // uid del usuario que quiero enviar mensajes
    users: [], // Todos los usuario de la DB
    messages: [] // Mensajes del chat seleccionado
}

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}