import React from "react";
import '../../App.css';

type OnOffType = {
    switch: boolean
}

function Switcher(props: OnOffType) {
    return (
        <div className='switcher'>
            <div className={"btn " + (props.switch && 'on')}>
                ON
            </div>
            <div className={"btn " + (props.switch || 'off')}>
                OFF
            </div>
            <div className={'indicator ' + (props.switch ? 'on' : 'off')}></div>
        </div>
    )
}

export default Switcher;