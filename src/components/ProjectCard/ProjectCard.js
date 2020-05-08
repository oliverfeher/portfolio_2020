import React from "react";

class ProjectCard extends React.Component
{
    render()
    {
        return (
            <div className="card-container">
                <img class="card-img" src={this.props.src}></img>
            </div>
        )
    }
}

export default ProjectCard;