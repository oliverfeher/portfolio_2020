import React from "react";
import github from "./github.svg";
import twitter from "./twitter.svg";
import linkedin from "./linkedin.svg";
import email from "./mail.svg";

class SocialIcons extends React.Component
{
    render()
    {
        return(
            <div id="social-container">
                <img className="social-icon" onClick={this.redirecGitHub} src={github} alt="social-icon"></img>
                <img className="social-icon" onClick={this.redirectTwitter} src={twitter} alt="social-icon"></img>
                <img className="social-icon" onClick={this.redirectLinkedIn} src={linkedin} alt="social-icon"></img>
                <a href="mailto:oliver92.feher@gmail.com"><img className="social-icon" id="email-icon" src={email} alt="social-icon"></img></a>
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

    sendEmail()
    {
        console.log("hello")
    }

}

export default SocialIcons;