import React from "react";
import NavButton from "../NavButton/NavButton";

class NavBar extends React.Component
{
    render()
    {
        return (
            <div id="nav-bar">
                <NavButton title="Home" path="/"/>
                <NavButton title="About me" path="/about"/>
                <NavButton title="Projects" />
                <NavButton title="Contact" />
            </div>
        )
    }
}

export default NavBar;