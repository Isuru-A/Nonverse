import React from "react";
import {NavLink} from "react-router-dom";

const NavSection = ({title, links}) => {
    return (
        <section className="nav-section">
            <span className="splash">{title}</span>
            <ul className="nav-links">
                {links.map((link) => (
                    <NavLink end={!link.mid} key={link.key} to={link.target} className={({isActive}) => isActive ? 'active' : ''}>
                        {link.title}
                    </NavLink>
                    )
                )}
            </ul>
        </section>
    )
}

export default NavSection