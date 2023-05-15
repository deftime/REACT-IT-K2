import React from "react";
import StarFull from "../../images/full-star.svg";
import StarEmpty from "../../images/empty-star.svg";

export function Rating() {
    return (
        <div>
            <Star select={true}/>
            <Star select={true}/>
            <Star select={true}/>
            <Star select={false}/>
            <Star select={false}/>
        </div>
    )
}

function Star(props: any) {
    return (
        <img src={ props.select ? StarFull : StarEmpty } alt="star"/>
    )
}