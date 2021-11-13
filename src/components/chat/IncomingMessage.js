/* Importaciones propias */
import {hourMonth} from '../../helpers/hour-month';

export const IncomingMessage = ({message}) => {
    return (
        <div className="incoming_msg">
            <div className="incoming_msg_img">
                <img
                    src="https://electronicssoftware.net/wp-content/uploads/user.png"
                    alt="sunil"/>
            </div>

            <div className="received_msg">
                <div className="received_withd_msg">
                    <p>{message.message}</p>
                    <span className="time_date"> {hourMonth(message.createdAt)}</span>
                </div>
            </div>
        </div>
    )
}