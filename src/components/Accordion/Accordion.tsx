import React from "react";

function Accordion() {
    return (
        <div>
            <AccPalte />
            <AccContent />
        </div>
    )
}

function AccPalte() {
    return (
        <div className="plate">
            Opener
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