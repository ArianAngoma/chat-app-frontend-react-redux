import {useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    // Route,
    Redirect
} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

/* Importaciones propias */
import {ChatPage} from '../pages/ChatPage';
import {AuthRouter} from './AuthRouter';
import {startChecking} from '../actions/auth';
import {PublicRoute} from './PublicRoute';
import {PrivateRoute} from './PrivateRoute';
import {useSocket} from '../hooks/useSocket';
import {socketSetStore} from '../actions/socket';
import {startChatGetUsers} from '../actions/chat';

export const AppRouter = () => {
    const dispatch = useDispatch();

    /* Hook para conexión al Socket Server */
    const {socket, online, connectSocket, disconnectSocket} = useSocket(process.env.REACT_APP_PATH_SOCKET_SERVER);

    /* Store de auth */
    const {checking, user} = useSelector(state => state.auth);

    /* Validar si tengo un usuario logueado */
    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch]);

    /* Conectar socket si el usuario está logueado */
    useEffect(() => {
        if (!!user) connectSocket();
    }, [user, connectSocket]);

    /* Desconectar socket si no hay usuario logueado */
    useEffect(() => {
        if (!user) disconnectSocket();
    }, [user, disconnectSocket]);

    /* Dispara acción para guardar el socket en el store */
    useEffect(() => {
        dispatch(socketSetStore(socket, online));
    }, [dispatch, socket, online]);

    /* Esuchar evento de los usuarios conectados */
    useEffect(() => {
        dispatch(startChatGetUsers());
    }, [dispatch, socket]);

    if (checking) return (
        <div className="m-0 vh-100 row justify-content-center align-items-center">
            <div className="spinner-border text-primary"></div>
        </div>
    );

    return (
        <Router>
            <div>
                <Switch>
                    {/*<Route path="/auth" component={AuthRouter}/>*/}
                    <PublicRoute path="/auth" isAuthenticated={!!user} component={AuthRouter}/>

                    {/*<Route exact path="/" component={ChatPage}/>*/}
                    <PrivateRoute exact path="/" isAuthenticated={!!user} component={ChatPage}/>

                    <Redirect to="/"/>
                </Switch>
            </div>
        </Router>
    )
}