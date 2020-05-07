import React from "react";
import "./NavButton.css"

const NavButton = props =>
{
    return (
        <a className="nav-link" href="#">{props.title}</a>
    )
}

export default NavButton;