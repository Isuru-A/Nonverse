import React from "react";
import Notification from "./Elements/Notification";
import {useSelector} from "react-redux";

const NotificationPortal = () => {

    const notifications = useSelector(state => state.notifications)

    return (
        <div className="notification-portal">
            {notifications.map((notification) => (

                <Notification key={notification.key}
                              id={notification.key}
                              weight={notification.weight}
                              timeout={notification.timeout}
                >
                    <span>{notification.text}</span>
                </Notification>
            ))}
        </div>
    )
}

export default NotificationPortal