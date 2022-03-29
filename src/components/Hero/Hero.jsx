import React from "react";
import InLineButton from "../Elements/InLineButton";
import Graphic from "../Graphic";

const Hero = () => {

    return (
        <div className="hero">
            <div className="text">
                <h1>P L A Y<span className="splash">.</span></h1>
                <h1>S I M P L I F I E D<span className="splash">.</span></h1>
                <h2>
                    An <span className="splash">invite</span> only social recreation project
                </h2>
                <InLineButton id={"request-cta"}>Request Invitation</InLineButton>
            </div>
            {/*<div className="text text-left">*/}
            {/*    <h1>P L A Y<span className="splash">.</span></h1>*/}
            {/*    <h1>S I M P L I F I E D<span className="splash">.</span></h1>*/}
            {/*    <h2>*/}
            {/*        An <span className="splash">invite</span> only social recreation project*/}
            {/*    </h2>*/}
            {/*    <InLineButton id={"request-cta"}>Request Invitation</InLineButton>*/}
            {/*</div>*/}
        </div>
    )
}

export default Hero