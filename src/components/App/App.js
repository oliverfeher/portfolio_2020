import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Hello from "../Hello/Hello";
import Intro from "../Intro/Intro";
import NavBar from "../NavBar/NavBar"
import Dots from "../Dots/Dots";
import SocialIcons from "../SocialIcons/SocialIcons";
import AboutMe from "../AboutMe/AboutMe"
import ProjectCard from "../ProjectCard/ProjectCard";
import gif1 from "../App/gif.gif"

function App() 
{
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutMe} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/projects" component={Projects} />
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
                <Hello />s
                <Link className="btn" to="/projects">explore</Link>
            </div>
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

function Projects()
{
    return (
        <div id="main">
            <Dots place="top-left"/>
            <Dots place="bottom-right"/>
            <NavBar />
            <p className="section-title">Recent Projects</p>
            <div id="projects-container">
                <ProjectCard src={gif1}/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
            <SocialIcons />
        </div>
    )
}

export default App;



