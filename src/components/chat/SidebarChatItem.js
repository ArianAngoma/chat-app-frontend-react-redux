import {useDispatch, useSelector} from 'react-redux';

/* Importaciones propias */
import {chatSetActive} from '../../actions/chat';

export const SidebarChatItem = ({user}) => {
    const dispatch = useDispatch();

    /* Store del chat */
    const {uidUserChatActive} = useSelector(state => state.chat);

    /* Función que dispara la acción para activar el chat */
    const handleActiveChat = () => {
        dispatch(chatSetActive(user.uid));
    }

    return (
        <div className={`chat_list ${(user.uid === uidUserChatActive) && 'active_chat'}`}
             onClick={handleActiveChat}>
            {/* active_chat */}
            <div className="chat_people">
                <div className="chat_img">
                    <img
                        src="https://electronicssoftware.net/wp-content/uploads/user.png"
                        alt="avatar"/>
                </div>

                <div className="chat_ib">
                    <h5>{user.name}</h5>

                    {
                        (user.online)
                            ? (<span className="text-success">Online</span>)
                            : (<span className="text-danger">Offline</span>)
                    }
                </div>
            </div>
        </div>
    )
}