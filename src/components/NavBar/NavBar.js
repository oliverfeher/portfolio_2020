import React from "react";
import NavButton from "../NavButton/NavButton";

class NavBar extends React.Component
{
    render()
    {
        return (
            <div id="nav-bar">
                <NavButton title="Home" />
                <NavButton title="About me" />
                <NavButton title="Projects" />
                <NavButton title="Contact" />
            </div>
        )
    }
}

export default NavBar;