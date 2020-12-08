import React, { useState } from 'react';
import { Switch as UISwitch } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import { red, blue, grey } from "@material-ui/core/colors";

const ColorSwitch = withStyles({
    switchBase: {
      color: red[500],
      '&$checked': {
        color: blue[500],
      },
      '&$checked + $track': {
        backgroundColor: grey[700],
      },
    },
    checked: {},
    track: {},
  })(UISwitch);

function Switch(props) {
    const [toggleState, setToggleState] = useState(false)
    return (
        <>
        {props.left} <ColorSwitch checked={toggleState} onChange={() => setToggleState(!toggleState)} /> {props.right}
        <div>{toggleState ? props.RDisplay : props.LDisplay}</div>
        </>
    )
}

export default Switch;