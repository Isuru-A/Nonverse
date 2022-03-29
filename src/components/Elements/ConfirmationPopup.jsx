import React, {useState} from "react";
import Popup from "./Popup";
import InLineButton from "./InLineButton";

const ConfirmationPopup = ({children, callback, error, exit}) => {

    const [load, setLoad] = useState(false)

    async function action() {
        setLoad(true)
        await callback()
            .then(() => {
                setLoad(false)
                exit()
            })
            .catch(() => {
                setLoad(false)
            })
    }

    return (
        <Popup load={load} exit={exit}>
            <h1>Confirm Action</h1>
            <p className="default" id="confirmation-pop-description">
                {children}
            </p>
            <br/>
            <span className="danger">{error}</span>
            <InLineButton styles="confirm-pop-button" action={action}>Confirm</InLineButton>
        </Popup>
    )
}

export default ConfirmationPopup