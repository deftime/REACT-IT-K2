import React from "react";
import StarFull from "../../images/full-star.svg";
import StarEmpty from "../../images/empty-star.svg";

type RatingProp = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

type StarProp = {
    select: boolean
}

export function Rating(props: RatingProp) {
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

function Star(props: StarProp) {
    return (
        <img src={ props.select ? StarFull : StarEmpty } alt="star"/>
    )
}