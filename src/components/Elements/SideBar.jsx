import React from "react";
import Logo from "./Logo";
import auth_base, {auth} from "../../scripts/auth/auth";

const SideBar = ({children}) => {
    return (
        <div className="side-bar">
            <div className="logo" onClick={() => window.location.replace('/')}>
                <Logo color={'#ECF0F3'}/>
            </div>
            {children}
            <span className="logout danger" onClick={() => {
                auth.post('/logout')
                    .then(() => {
                        return auth_base.login()
                    })
            }}>Logout</span>
        </div>

    )
}

export default SideBar