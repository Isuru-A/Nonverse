import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import Loader from "./Loader";
import FadeIn from "./FadeIn";

const Popup = ({children, load, exit}) => {

    return (
        <FadeIn duration={0.15}>
            <div className="popup-container">
                <div className="popup">
                    <div className="exit" onClick={exit}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </div>
                    <div className="popup-content">
                        {children}
                    </div>
                    {load ? <Loader/> : ''}
                </div>
            </div>
        </FadeIn>
    )
}

export default Popup