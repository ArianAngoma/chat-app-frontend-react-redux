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

export const AppRouter = () => {
    const dispatch = useDispatch();

    /* Store de auth */
    const {checking, user} = useSelector(state => state.auth);

    /* Validar si tengo un usuario logueado */
    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch]);

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