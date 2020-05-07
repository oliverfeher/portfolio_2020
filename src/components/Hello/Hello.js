import React from "react";
import logo from "./Hello.png";
import dots from "./hellodots.svg";
import "./Hello.css"


class Hello extends React.Component
{
    render()
    {
        return (
            <div id="hello-container">
                <img id="hello-dots" src={dots}  alt="hello-logo"/>
                <img src={logo}  alt="hello-logo"/>
            </div>
        )
    }
}

export default Hello;