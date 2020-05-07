import React from "react";
import github from "./github.svg";
import twitter from "./twitter.svg";
import linkedin from "./linkedin.svg";

class SocialIcons extends React.Component
{
    render()
    {
        return(
            <div id="social-container">
                <img className="social-icon" src={github}></img>
                <img className="social-icon" src={twitter}></img>
                <img className="social-icon" src={linkedin}></img>
            </div>
        )
    }
}

export default SocialIcons;