import React from "react";
import "./Intro.css"

class Intro extends React.Component
{
    render()
    {
        return (
            <div id="intro-container">
                <p className="intro-p">my name is <span>Oliver</span></p>
                <p className="intro-p"><span>I'm a </span>Software Engineer</p>
            </div>
        );
    }
}

export default Intro;