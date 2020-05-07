import React from "react";
import "./App.css";
import Hello from "../Hello/Hello";
import Intro from "../Intro/Intro";
import NavBar from "../NavBar/NavBar"

class App extends React.Component 
{
    render()
    {
        return (
            <div id="main">
                <NavBar />
                <Intro />
                <Hello />
            </div>
        );
    }
}

export default App;