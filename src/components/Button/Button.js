import React from "react";

class Button extends React.Component
{
    render()
    {
        return (
            <a id={this.props.id}>{this.props.title}</a>
        )
    }
}

export default Button;