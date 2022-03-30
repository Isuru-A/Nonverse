import React from "react";
import {AnimatePresence} from "framer-motion";
import {Route, Routes, useLocation} from "react-router-dom";
import Hero from "./Hero/Hero";

const AnimateRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route exact path={'/'} element={<Hero/>}/>
                <Route exact path={'/test'} element={<h1>Hello</h1>}/>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimateRoutes