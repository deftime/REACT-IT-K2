import React from "react";

function Accordion(props: any) {
    return (
        <div>
            <AccPlate title={props.title} />
            <AccContent />
        </div>
    )
}

function AccPlate(props: any) {
    return (
        <div className="plate">
            {props.title}
        </div>
    )
}

function AccContent() {
    return (
        <div className="content">
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
        </div>
    )
}

export default Accordion;