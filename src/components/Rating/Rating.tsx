import React from "react";
import StarFull from "../../images/full-star.svg";
import StarEmpty from "../../images/empty-star.svg";

export function Rating(props: any) {
    return (
        <div>
            <Star select={props.value > 0}/>
            <Star select={props.value > 1}/>
            <Star select={props.value > 2}/>
            <Star select={props.value > 3}/>
            <Star select={props.value > 4}/>
        </div>
    )
}

function Star(props: any) {
    return (
        <img src={ props.select ? StarFull : StarEmpty } alt="star"/>
    )
}