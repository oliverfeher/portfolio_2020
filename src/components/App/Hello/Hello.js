import React from "react";
import logo from "./Hello.png";
import "./Hello.css"


class Hello extends React.Component
{
    render()
    {
        return (
            <img src={logo}  alt="hello-logo"/>
        )
    }
}

export default Hello;