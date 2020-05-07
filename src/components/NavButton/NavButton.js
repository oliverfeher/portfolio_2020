import React from "react";
import "./NavButton.css"
import { Link} from "react-router-dom";

const NavButton = props =>
{
    return (
        <Link className="nav-link" to={props.path}>{props.title}</Link>
    )
}

export default NavButton;