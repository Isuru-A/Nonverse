import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import Loader from "./Loader";
import FadeIn from "./FadeIn";

const Modal = ({title, styling, exit, load, children}) => {
    return (
        <FadeIn duration={0.15}>
            <div className="modal-container">
                <div className={`modal ${styling}`}>
                    <h1>{title}</h1>
                    <div className="exit" onClick={exit}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </div>
                    <div className="modal-content">
                        {children}
                    </div>
                    {load ? <Loader/> : ''}
                </div>
            </div>
        </FadeIn>
    )
}

export default Modal