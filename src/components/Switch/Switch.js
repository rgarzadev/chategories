import React, { useState } from 'react';
import { Switch as UISwitch } from '@material-ui/core';

function Switch(props) {
    const [toggleState, setToggleState] = useState(false)
    return (
        <>
        {props.left} <UISwitch checked={toggleState} onChange={() => setToggleState(!toggleState)} /> {props.right}
        <div>{toggleState ? props.RDisplay : props.LDisplay}</div>
        </>
    )
}

export default Switch;