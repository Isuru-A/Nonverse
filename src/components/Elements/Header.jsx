import React from "react";
import Logo from "./Logo";
import InLineButton from "./InLineButton";
import {useNavigate} from "react-router";
import {NavLink} from "react-router-dom";

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
                <NavLink to={'/'} className={({isActive}) => isActive ? 'auth-button auth-active' : 'auth-button'}>Home</NavLink>
                <NavLink to={'/about'} className={({isActive}) => isActive ? 'auth-button auth-active' : 'auth-button'}>About</NavLink>
                <NavLink to={'/docs'} className={({isActive}) => isActive ? 'auth-button auth-active' : 'auth-button'}>Documentation</NavLink>
                <a href="https://my.nonverse.net" className={"auth-button"} id={"login-button"} target="_blank"
                   rel="noreferrer">Login</a>
            </div>
        </div>
    )
}

export default Header