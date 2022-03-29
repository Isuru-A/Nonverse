import React from "react";
import {motion} from "framer-motion";

const FadeIn = ({duration, children}) => {

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: duration}}>
            {children}
        </motion.div>
    )
}

export default FadeIn