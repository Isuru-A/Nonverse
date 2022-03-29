import React from "react";
import DashboardLoader from "./Dashboard/DashboardLoader";
import {useSelector} from "react-redux";

const Container = ({load, title, id, children, noname, line}) => {

    const userData = useSelector(state => state.user)

    return (
        <div className="section-wrapper">
            {load ? (
                <DashboardLoader/>
            ) : (
                <div className="section-container">
                    <h1 className="title">{`${title} `}{noname
                        ? <>
                            {line ? (
                                <span>| {line}</span>
                            ) : ''}
                        </>
                        : (
                            <span>| {` ${userData.name_first} ${userData.name_last}`}</span>)}</h1>
                    <div className="content-wrapper" id={id}>
                        {children}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Container