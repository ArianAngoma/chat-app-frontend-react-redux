import {Provider} from 'react-redux';

/* Importaciones propias */
import {AppRouter} from './router/AppRouter';
import {store} from './store/store';

export const ChatApp = () => {
    return (
        <Provider store={store}>
            <AppRouter/>
        </Provider>
    )
}