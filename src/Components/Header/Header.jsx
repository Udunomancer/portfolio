import React from "react";
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                 <NavLink to="/">About</NavLink>
                 <NavLink to="/contact">Contact</NavLink>
                 <NavLink to="/portfolio">Portfolio</NavLink>
            </nav>
        </header>
    )
}

export default Header;