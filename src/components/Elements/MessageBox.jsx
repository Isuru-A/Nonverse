import React from "react";

const MessageBox = ({message, weight, link}) => {

    if (!weight) {
        weight = 'default'
    }

    let fill
    switch (weight) {
        case 'danger':
            fill = 'orangered'
            break
        case 'warning':
            fill = 'orange'
            break
        default:
            fill = '#6951FF'
    }

    return (
        <div className="message-box" style={{backgroundColor: fill}}>
            <div>
                <span className="dark">{`${message} `}</span>
                {link ? <span className="link" onClick={link.action}>{link.title}</span> : ''}
            </div>
        </div>
    )
}

export default MessageBox