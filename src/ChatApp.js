import {Provider} from 'react-redux';
import moment from 'moment';
import 'moment/locale/es';

/* Importaciones propias */
import {AppRouter} from './router/AppRouter';
import {store} from './store/store';

/* Configuración del idioma de moment */
moment.locale('es');

export const ChatApp = () => {
    return (
        <Provider store={store}>
            <AppRouter/>
        </Provider>
    )
}