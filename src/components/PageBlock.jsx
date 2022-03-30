import React from "react";

const PageBlock = ({code}) => {

    if (!code) {
        code = 500
    }

    let message = ''
    switch (code) {
        case 500:
            message = 'Internal Server Error'
            break
        case 404:
            message = 'Resource Not Found'
            break
        default:
            message = 'Internal Server Error'
            break
    }

    return (
        <div className="page-block">
            <div className="error">
                <span className="dark">{code}</span>
                <span className="splash">{" | "}</span>
                <span className="dark">{message}</span>
            </div>
        </div>
    )
}

export default PageBlock