export const SidebarChatItem = () => {
    return (
        <div className="chat_list">
            {/* active_chat */}
            <div className="chat_people">
                <div className="chat_img">
                    <img
                        src="https://electronicssoftware.net/wp-content/uploads/user.png"
                        alt="avatar"/>
                </div>

                <div className="chat_ib">
                    <h5>Some random name</h5>
                    <span className="text-success">Online</span>
                    <span className="text-danger">Offline</span>
                </div>
            </div>
        </div>
    )
}