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
                    <img class="card-img" src={this.props.src}></img>
                </div>
            )
        }
        else
        {
            return (
                <div className="card-container">
                    <div>Hello</div>
                </div>
            )
        }
    }

}

export default ProjectCard;