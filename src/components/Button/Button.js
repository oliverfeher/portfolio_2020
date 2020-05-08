import React from "react";

class Button extends React.Component
{
    render()
    {
        return (
            <a href={this.props.href} className={this.props.className} target="pdf-frame">{this.props.title}</a>
        )
    }
}

export default Button;