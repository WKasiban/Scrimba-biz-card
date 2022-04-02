import React from "react";
import star from "../images/star.png"
import starFilled from "../images/star-filled.png"

export default function Star(props) {
    let starIcon = props.isFilled ? starFilled : star

    return (
        <img src={starIcon} 
        className="card-star" 
        onClick={props.handleClick}
        />
    )
}