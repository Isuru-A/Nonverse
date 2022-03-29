import React from "react";

const ComingSoon = () => {
    return (
        <div className="page-block">
            <div className="error">
                <div className="error-stack">
                    <span className="default">Coming Soon!</span>
                    <span className="default" id="under-construction">This area is still under construction</span>
                    <span className="default" id="under-construction">{`ETA: ${process.env.REACT_APP_ETA}`}</span>
                </div>
            </div>
        </div>
    )
}

export default ComingSoon