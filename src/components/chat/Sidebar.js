import {useSelector} from 'react-redux';

/* Importaciones propias */
import {SidebarChatItem} from './SidebarChatItem';

export const Sidebar = () => {
    /* Store del chat */
    const {users} = useSelector(state => state.chat);
    /* Store de auth */
    const {user} = useSelector(state => state.auth);
    const {uid} = user;

    return (
        <div className="inbox_chat">
            {
                users
                    /* Filtrar todos los usuario, excepto el logueado */
                    .filter(user => user.uid !== uid)
                    .map(user => (
                        <SidebarChatItem key={user.uid}
                                         user={user}/>
                    ))
            }

            {/* Espacio extra para el scroll */}
            <div className="extra_space"/>
        </div>
    )
}