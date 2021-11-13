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
                    <span className="time_date"> 11:01 AM | June 9</span>
                </div>
            </div>
        </div>
    )
}