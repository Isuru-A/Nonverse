import React from "react";
import Logo from "./Logo";
import InLineButton from "./InLineButton";
import {useNavigate} from "react-router";

const Header = () => {

    const navigate = useNavigate()

    return (
        <div className="header">
            <div className="logo-wrapper" onClick={() => {
                navigate('/')
            }}>
                <Logo color={'#333344'}/>
            </div>
            <div id="auth-actions">
                <InLineButton styles={"auth-button"}>Documentation</InLineButton>
                <InLineButton styles={"auth-button"}>About</InLineButton>
                <a href="https://my.nonverse.net" className={"auth-button"} id={"login-button"} target="_blank"
                   rel="noreferrer">Login</a>
            </div>
        </div>
    )
}

export default Header