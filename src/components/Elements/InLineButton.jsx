import React from "react";

const InLineButton = ({id, styles, action, children}) => {

    return (
        <span className={`default button-in-line ${styles}`} id={id} onClick={action}>
            {children}
        </span>
    )
}

export default InLineButton