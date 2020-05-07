import React from "react";
import "./App.css";
import Hello from "../Hello/Hello";
import Intro from "../Intro/Intro";

class App extends React.Component 
{
    render()
    {
        return (
            <div id="main">
                <Intro />
                <Hello />
            </div>
        )
    }
}

export default App;