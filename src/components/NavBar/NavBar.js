import React from "react";
import NavButton from "../NavButton/NavButton";

class NavBar extends React.Component
{
    render()
    {
        return (
            <div id="nav-bar">
                <NavButton title="Home" path="/" />
                <NavButton title="About me" path="/about" />
                <NavButton title="Projects" path="/projects" />
                {/* <NavButton title="Contact" path="/contact" /> */}
            </div>
        )
    }
}

export default NavBar;