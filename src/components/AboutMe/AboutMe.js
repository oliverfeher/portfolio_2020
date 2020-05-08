import React from "react";
import portrait from "./portrait.png"
import aboutMe from "./about.png"
import NavBar from "../NavBar/NavBar"
import Dots from "../Dots/Dots";
import Button from "../Button/Button";
import SocialIcons from "../SocialIcons/SocialIcons";
import pdf from "../AboutMe/resume.pdf"


function AboutMe()
{
    return (
        <div id="main">
            <Dots place="top-left"/>
            <Dots place="bottom-right"/>
            <NavBar />
            <div id="about-me-parapgraphs">
                <img src={aboutMe} id="aboutMe"/>
                <p>I'm a fullstack developer from the Raleigh/Durham area.</p>
                <p>I have passion for building, teaching and learning. I'm experienced in JavaScript, Python, Ruby, Java and C#. I have strong background in Computer Science from majoring in Application and Database Development.</p>
                <p>I enthusiastically bring strong skills in team-building, communication, debugging, data analysis and leadership that help progressive companies succeed. My creativity and passion for programming
                are leading me to continuously learn and explore new technologies.</p>
            </div>
            <img src={portrait} id="portrait"/>
            <Button className="btn" title="resume" href={pdf}/>
            <SocialIcons />
        </div>
    );

}


export default AboutMe;