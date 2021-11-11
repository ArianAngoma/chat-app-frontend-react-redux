import {Link} from 'react-router-dom';

/* Importaciones propias */
import {useForm} from '../hooks/useForm';

/* Estado inicial del formulario de Login */
const initialStateFormLogin = {
    email: '',
    password: '',
    rememberMe: false
}

export const LoginPage = () => {
    /* Hook para el formulario */
    const [formValues, handleInputChange, reset] = useForm(initialStateFormLogin);
    const {email, password, rememberMe} = formValues;

    const toggleCheck = () => {
        reset({
            ...formValues,
            rememberMe: !rememberMe
        });
    }

    /* Función para el submit del login */
    const handleLogin = (e) => {
        e.preventDefault();

        console.log(formValues);
    }

    return (
        <form className="login100-form validate-form flex-sb flex-w"
              onSubmit={handleLogin}>
            <span className="login100-form-title mb-3">
                Chat - Ingreso
            </span>

            <div className="wrap-input100 validate-input mb-3">
                <input className="input100" type="email" name="email" placeholder="Email"
                       value={email}
                       onChange={handleInputChange}/>
                <span className="focus-input100"/>
            </div>

            <div className="wrap-input100 validate-input mb-3">
                <input className="input100" type="password" name="password" placeholder="Password"
                       value={password}
                       onChange={handleInputChange}/>
                <span className="focus-input100"/>
            </div>

            <div className="row mb-3">
                <div className="col"
                     onClick={toggleCheck}>
                    <input className="input-checkbox100" id="ckb1" type="checkbox" name="rememberMe"
                           checked={rememberMe}
                           readOnly/>
                    <label className="label-checkbox100">
                        Recordarme
                    </label>
                </div>

                <div className="col text-right">
                    <Link to="/auth/register" className="txt1">
                        Nueva cuenta?
                    </Link>
                </div>
            </div>

            <div className="container-login100-form-btn m-t-17">
                <button className="login100-form-btn" type="submit">
                    Ingresar
                </button>
            </div>
        </form>
    )
}