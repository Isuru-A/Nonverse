import NotificationPortal from "./NotificationPortal";
import {BrowserRouter} from "react-router-dom";
import Logo from "./Elements/Logo";
import InLineButton from "./Elements/InLineButton";
import React from "react";
import AnimateRoutes from "./AnimateRoutes";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
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
                <AnimateRoutes/>
                <span className="dark" id="nv-badge">Made With Love, Nonverse Studios - 2022</span>
            </BrowserRouter>
        </div>
    );
}

export default App;
