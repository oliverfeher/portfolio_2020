import React from "react";
import "./App.css";
import Hello from "../Hello/Hello";
import Intro from "../Intro/Intro";
import NavBar from "../NavBar/NavBar"
import Dots from "../Dots/Dots";
import Button from "../Button/Button"

class App extends React.Component 
{
    render()
    {
        return (
            <div id="main">
                <Dots place="top-left"/>
                <Dots place="bottom-right"/>
                <NavBar />
                <Intro />
                <Hello />
                <Button id="explore-btn" title="explore"/>
            </div>
        );
    }
}

export default App;