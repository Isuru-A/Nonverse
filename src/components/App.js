import NotificationPortal from "./NotificationPortal";
import {BrowserRouter} from "react-router-dom";
import React, {useEffect} from "react";
import AnimateRoutes from "./AnimateRoutes";
import Header from "./Elements/Header";
import api_base from "../scripts/api/api";

function App() {

    useEffect(() => {
        api_base.initialise()
    })

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
