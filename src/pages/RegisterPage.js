import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';

/* Importaciones propias */
import {useForm} from '../hooks/useForm';
import {startRegister} from '../actions/auth';

/* Estado inicial del formulario de Login */
const initialStateFormRegister = {
    name: '',
    email: '',
    password: ''
}

export const RegisterPage = () => {
    const dispatch = useDispatch();

    /* Hook para el formulario */
    const [formValues, handleInputChange] = useForm(initialStateFormRegister);
    const {name, email, password} = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        /* Disparar acción para comenzar el registro de usuario */
        dispatch(startRegister(name, email, password));
    }

    /* Función para deshabilitar botón si el formulario esta incompleto */
    const formFull = () => !!(name.length && email.length && password.length);

    return (
        <form className="login100-form validate-form flex-sb flex-w"
              onSubmit={handleRegister}>
            <span className="login100-form-title mb-3">
                Chat - Registro
            </span>

            <div className="wrap-input100 validate-input mb-3">
                <input className="input100" type="text" name="name" placeholder="Nombre"
                       value={name} onChange={handleInputChange}/>
                <span className="focus-input100"/>
            </div>

            <div className="wrap-input100 validate-input mb-3">
                <input className="input100" type="email" name="email" placeholder="Email"
                       value={email} onChange={handleInputChange}/>
                <span className="focus-input100"/>
            </div>

            <div className="wrap-input100 validate-input mb-3">
                <input className="input100" type="password" name="password" placeholder="Password"
                       value={password} onChange={handleInputChange}/>
                <span className="focus-input100"/>
            </div>

            <div className="row mb-3">
                <div className="col text-right">
                    <Link to="/auth/login" className="txt1">
                        Ya tienes cuenta?
                    </Link>
                </div>
            </div>

            <div className="container-login100-form-btn m-t-17">
                <button type="submit" className="login100-form-btn"
                        disabled={!formFull()}>
                    Crear cuenta
                </button>
            </div>
        </form>
    )
}