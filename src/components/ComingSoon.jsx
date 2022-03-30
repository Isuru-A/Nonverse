import React from "react";
import {motion} from "framer-motion";

const ComingSoon = () => {
    return (
        <motion.div
            className="page-block"
            key="page-block-cs"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{ opacity: 0}}
        >
            <div className="error">
                <div className="error-stack">
                    <span className="splash">Coming Soon!</span>
                    <span className="dark" id="under-construction">This area is still under construction</span>
                    <span className="dark" id="under-construction">{`ETA: ${process.env.REACT_APP_ETA}`}</span>
                </div>
            </div>
        </motion.div>
    )
}

export default ComingSoon