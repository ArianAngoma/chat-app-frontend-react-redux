import {useForm} from '../../hooks/useForm';

/* Estado inicial del formulario */
const initialState = {
    message: ''
}

export const SendMessage = () => {
    /* Hook para el estado del formulario */
    const [formValue, handleChange, reset] = useForm(initialState);
    const {message} = formValue;

    /* Función para envíar el formulario */
    const handleSubmit = (e) => {
        e.preventDefault();

        /* Validar si el formulario está vacío */
        if (!message.length) return null;

        /* Limpiar formulario */
        reset(initialState);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="type_msg row">
                <div className="input_msg_write col-sm-9">
                    <input type="text" className="write_msg" placeholder="Mensaje..."
                           name="message"
                           value={message}
                           onChange={handleChange}/>
                </div>

                <div className="col-sm-3 text-center">
                    <button className="msg_send_btn mt-3" type="submit">
                        enviar
                    </button>
                </div>
            </div>
        </form>
    )
}