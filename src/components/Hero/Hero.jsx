import React, {useState} from "react";
import Graphic from "../Graphic";
import HeroText from "./HeroText";

const Hero = () => {
    const [show, setShow] = useState(true)

    return (
        <>
            <Graphic show={show}/>
            <div className="hero">
                <HeroText show={show} setShow={setShow}/>
                <div className="text text-left">
                    {/*<h2>*/}
                    {/*    Studio de <span className="splash">N O N V E R S E</span>*/}
                    {/*</h2>*/}
                </div>
            </div>
        </>
    )
}

export default Hero