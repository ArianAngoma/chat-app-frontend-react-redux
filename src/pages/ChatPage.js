import {useSelector} from 'react-redux';

/* Importaciones propias */
import {InboxPeople} from '../components/chat/InboxPeople';
import {Messages} from '../components/chat/Messages';
import {ChatSelect} from '../components/chat/ChatSelect';

import '../css/chat.css';

export const ChatPage = () => {
    /* Store del chat */
    const {uidUserChatActive} = useSelector(state => state.chat);

    return (
        <div className="messaging">
            <div className="inbox_msg">
                <InboxPeople/>

                {
                    (uidUserChatActive)
                        ? <Messages/>
                        : <ChatSelect/>
                }
            </div>
        </div>
    )
}