import React from "react";
import {motion} from "framer-motion";
import RequestForm from "./RequestForm";

const Request = () => {

    return (

        <motion.div
            className="request-container"
            key="request-invitation"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <h1><span className="dark">Request an </span><span className="splash">Invitation</span></h1>
            <RequestForm/>
        </motion.div>
    )
}

export default Request