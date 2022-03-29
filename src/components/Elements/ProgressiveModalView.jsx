import React from "react";

const ProgressiveModalView = ({state, views}) => {

    let view
    view = views[state]

    return (
        <div className="progressive-modal-view">
            {view}
        </div>
    )
}

export default ProgressiveModalView