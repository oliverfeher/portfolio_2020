import React from "react";
import "./App.css";
import Hello from "../Hello/Hello";
import Intro from "../Intro/Intro";
import NavBar from "../NavBar/NavBar"
import Dots from "../Dots/Dots"

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
            </div>
        );
    }
}

export default App;