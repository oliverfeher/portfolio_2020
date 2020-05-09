import React from "react";
import xIcon from "../ProjectCard/xIcon.png";


class ProjectCard extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { isClicked: false};
    }

    render()
    {
        const isClicked = this.state.isClicked;

        if(!isClicked) 
        {
            return (
                <div className="card-container">
                    <img onClick={this.handleOnClick} className="card-img" src={this.props.src} alt="project-gif"></img>
                </div>
            )
        }
        else
        {
            return (
                <div className="card-container">
                    <div className="card-description">
                        <img src={xIcon} className="xIcon" onClick={this.handleOnClickBack} alt="exit-icon"/>
                        <div className="card-description-text-container">
                            <p className="card-description-text">{this.props.desc1}</p>
                            <p className="card-description-text">{this.props.desc2}</p>
                            <p className="card-description-text">{this.props.desc3}</p>
                            <p className="card-description-text">{this.props.desc4}</p>
                        </div>
                        <div className="card-description-buttons-container">
                            <a className="card-description-button" href={this.props.source} target="_blank" rel="noopener noreferrer">source</a>
                            <a className="card-description-button" href={this.props.demo} target="_blank" rel="noopener noreferrer">{this.props.videoLive}</a>
                            
                        </div>
                    </div>
                </div>
            )
        }
    }

    handleOnClick = () => {
        this.setState({isClicked: true});
    }

    handleOnClickBack = () =>
    {
        this.setState({isClicked: false});
    }

}

export default ProjectCard;