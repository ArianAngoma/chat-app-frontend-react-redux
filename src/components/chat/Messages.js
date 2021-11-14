import {useSelector} from 'react-redux';

/* Importaciones propias */
import {SendMessage} from './SendMessage';
import {IncomingMessage} from './IncomingMessage';
import {OutgoingMessage} from './OutgoingMessage';

export const Messages = () => {
    /* Obtener el store */
    const {messages} = useSelector(state => state.chat);
    const {user} = useSelector(state => state.auth);

    return (
        <div className="mesgs">
            <div className="msg_history"
                 id="messages">
                {
                    messages.map(message => (
                        (message.to === user.uid)
                            ? <IncomingMessage key={message._id} message={message}/>
                            : <OutgoingMessage key={message._id} message={message}/>
                    ))
                }
            </div>

            <SendMessage/>
        </div>
    )
}