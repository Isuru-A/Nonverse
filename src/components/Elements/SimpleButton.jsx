import React from "react";

const SimpleButton = ({label, id, submit, action}) => {
    return (
        <button className="simple-button" id={id} type={submit ? 'submit' : 'button'} onClick={action ? action : null}>
            {label}
        </button>
    )
}

export default SimpleButton
