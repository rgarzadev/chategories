import React from 'react';

import { Container, makeStyles } from '@material-ui/core';

import "./ChategoryNameCard.css";
import {useParams} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));

function ChategoryNameCard() {
    const classes = useStyles();

    const navStyle = {
        color: 'white'
    };
    let {id} = useParams();
    return (
        <div className= "ContentArea">
        <Container className="ChategoryNameCard" maxWidth="sm">
            <div className="container">
              <div className="row">
                  <div className="col text-center ChategoryNamePlate"><h3>{id}</h3></div>
              </div>
            </div>
        </Container>
        </div>
    )
}

export default ChategoryNameCard;