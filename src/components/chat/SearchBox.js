import {useDispatch, useSelector} from 'react-redux';

/* Importaciones propias */
import {startLogout} from '../../actions/auth';

export const SearchBox = () => {
    const dispatch = useDispatch();

    /* Store de auth */
    const {user} = useSelector(state => state.auth);

    /* Dispara la acción para comenzar el logout de usuario */
    const handleLogout = () => {
        dispatch(startLogout());
    }

    return (
        <div className="headind_srch">
            <div className="recent_heading mt-2">
                <h4>{user.name}</h4>
            </div>

            <div className="srch_bar">
                <div className="stylish-input-group">
                    <button className="btn text-danger" onClick={handleLogout}>
                        Salir
                    </button>
                </div>
            </div>
        </div>
    )
}