import React from "react";
import {motion} from "framer-motion";

const Graphic = ({show}) => {
    return (
        <div className="graphic-container">
            <motion.div id="drag"
                        key="graphic-gooey"
                        drag
                        dragConstraints={{
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0
                        }}
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        transition={{duration: .5}}
                        exit={{ opacity: 0, scale: 10}}
            >
                <div className="gooey"/>
            </motion.div>
        </div>
    )
}

export default Graphic