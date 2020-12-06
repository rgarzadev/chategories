import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import "./MyChatsDiv.css";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));

function MyChatsDiv() {
    const classes = useStyles();

    const navStyle = {
        color: 'white'
    };

    return (
        <div className= "ContentArea">
        <Container className="MyChatsDiv" maxWidth="sm">
            <div className="container">
                </div>
        </Container>
        </div>
    )
}

export default MyChatsDiv;