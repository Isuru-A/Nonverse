import FadeIn from "./FadeIn";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {deleteNotification} from "../../state/notifications";

const Notification = ({id, weight, children, timeout}) => {

    const dispatch = useDispatch()

    if (!weight) {
        weight = 'default'
    }

    useEffect(() => {
        // Clear notification after timeout
        setTimeout(() => {
            dispatch(deleteNotification(id))
        }, timeout)
    })

    let fill
    switch (weight) {
        case 'danger':
            fill = 'orangered'
            break
        case 'warning':
            fill = 'orange'
            break
        case 'success':
            fill = '#00FF47'
            break
        default:
            fill = '#6951FF'
    }

    return (
        <FadeIn duration={.5} key={id}>
            <div className="notification" style={{borderColor: fill}}>
                <div className="notification-content">
                    {children}
                </div>
            </div>
        </FadeIn>
    )
}

export default Notification