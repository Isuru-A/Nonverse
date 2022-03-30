import React from "react";
import InLineButton from "../Elements/InLineButton";
import {motion} from "framer-motion";
import {useNavigate} from "react-router";

const HeroText = ({show, setShow}) => {

    const navigate = useNavigate()
    return (
        <motion.div className="text"
                    key="hero-text-r"
                    exit={{ opacity: 0}}
        >
            <h1>P L A Y<span className="splash">.</span></h1>
            <h1>S I M P L I F I E D<span className="splash">.</span></h1>
            <h2>
                An <span className="splash">invite</span> only social recreation project
            </h2>
            <InLineButton id={"request-cta"} action={() => {
                setShow(false)
                navigate('/test')
            }}>Request Invitation</InLineButton>
        </motion.div>
    )
}

export default HeroText