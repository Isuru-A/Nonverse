import React from "react";
import {AnimatePresence} from "framer-motion";
import {Route, Routes, useLocation} from "react-router-dom";
import Hero from "./Hero/Hero";
import Request from "./Request/Request";

const AnimateRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route exact path={'/'} element={<Hero/>}/>
                <Route exact path={'/request'} element={<Request/>}/>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimateRoutes