import React from "react";
import "./NavButton.css"

const NavButton = props =>
{
    return (
        <a>{props.title}</a>
    )
}

export default NavButton;