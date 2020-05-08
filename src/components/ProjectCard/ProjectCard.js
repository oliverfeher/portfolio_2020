import React from "react";


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
                    <img onClick={this.handleOnClick} className="card-img" src={this.props.src}></img>
                </div>
            )
        }
        else
        {
            return (
                <div className="card-container">
                    <div className="card-description" onClick={this.handleOnClickBack}>
                        <p className="card-description-text">{this.props.desc1}</p>
                        <p className="card-description-text">{this.props.desc2}</p>
                        <p className="card-description-text">{this.props.desc3}</p>
                        <p className="card-description-text">{this.props.desc4}</p>
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