import NotificationPortal from "./NotificationPortal";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Logo from "./Elements/Logo";
import Hero from "./Hero/Hero";
import InLineButton from "./Elements/InLineButton";
import Graphic from "./Graphic";
import React from "react";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Graphic/>
                <NotificationPortal/>
                <div className="header">
                    <Logo color={'#333344'}/>
                    <div id="auth-actions">
                        <InLineButton styles={"auth-button"}>Documentation</InLineButton>
                        <InLineButton styles={"auth-button"}>About</InLineButton>
                        <a href="https://my.nonverse.net" className={"auth-button"} id={"login-button"} target="_blank"
                           rel="noreferrer">Login</a>
                    </div>
                </div>
                <Routes>
                    <Route exact path={'/'} element={<Hero/>}/>
                </Routes>
                <span className="dark" id="nv-badge">Made With Love, Nonverse Studios - 2022</span>
            </BrowserRouter>
        </div>
    );
}

export default App;
