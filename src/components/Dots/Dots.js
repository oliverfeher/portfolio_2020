import React from "react";
import dots from "./dots.svg";
import "./Dots.css"

const Design = (props) => 
{
    return(
        <img 
        id={props.place} 
        src={dots}
        alt="dots-design-element"
        />
    )
}

export default Design;
