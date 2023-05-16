import React from "react";

type AccordionType = {
    title: string,
    collapse: boolean
}

function Accordion(props: AccordionType) {

    if (props.collapse) {
        return (
            <div>
                <AccPlate title={props.title} />
            </div>
        )
    } else {
        return (
            <div>
                <AccPlate title={props.title} />
                <AccContent />
            </div>
        )
    }
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