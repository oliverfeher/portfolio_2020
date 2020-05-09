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
                <img className="social-icon" onClick={this.redirecGitHub} src={github} alt="social-icon"></img>
                <img className="social-icon" onClick={this.redirectTwitter} src={twitter} alt="social-icon"></img>
                <img className="social-icon" onClick={this.redirectLinkedIn} src={linkedin} alt="social-icon"></img>
            </div>
        )
    }

    redirectLinkedIn()
    {
        window.open("https://www.linkedin.com/in/ofeher", "_blank");
    }

    redirectTwitter()
    {
        window.open("https://twitter.com/Oliver92F", "_blank");
    }

    redirecGitHub()
    {
        window.open("https://github.com/oliverfeher", "_blank");
    }

}

export default SocialIcons;