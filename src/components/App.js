import NotificationPortal from "./NotificationPortal";
import {BrowserRouter} from "react-router-dom";
import Logo from "./Elements/Logo";
import InLineButton from "./Elements/InLineButton";
import React from "react";
import AnimateRoutes from "./AnimateRoutes";
import Header from "./Elements/Header";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <NotificationPortal/>
                <Header/>
                <AnimateRoutes/>
                <span className="dark" id="nv-badge">Made With Love, Nonverse Studios - 2022</span>
            </BrowserRouter>
        </div>
    );
}

export default App;
