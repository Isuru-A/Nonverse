import React from "react";

const RoundedButton = ({children, fill, color, action}) => {

    const shadow = `2px 3px 12px 0 ${fill}`

    return (
        <button className="button" onClick={action} style={{backgroundColor: fill, boxShadow: shadow, color: color}}>
            {children}
        </button>
    )
}

export default RoundedButton