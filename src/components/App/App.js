import React from "react";
import "./App.css";
import Hello from "../Hello/Hello";
import Intro from "../Intro/Intro";
import NavBar from "../NavBar/NavBar"
import Dots from "../Dots/Dots";
import Button from "../Button/Button";
import SocialIcons from "../SocialIcons/SocialIcons";
import { Switch, Route } from "react-router-dom";

function App() 
{
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutMe} />
            <Route exact path="/contact" component={Contact} />
        </Switch>
    )
}

function HomePage()
{
    return (
        <div id="main">
            <Dots place="top-left"/>
            <Dots place="bottom-right"/>
            <NavBar />
            <div id="center">
                <Intro />
                <Hello />
                <Button id="explore-btn" title="explore"/>
            </div>
            <SocialIcons />
        </div>
    )
}

function AboutMe()
{
    return (
        <div id="main">
            <Dots place="top-left"/>
            <Dots place="bottom-right"/>
            <NavBar />
            <SocialIcons />
        </div>
    )
}

function Contact()
{
    return (
        <div id="main">
            <Dots place="top-left"/>
            <Dots place="bottom-right"/>
            <NavBar />
            <SocialIcons />
        </div>
    )
}

export default App;



