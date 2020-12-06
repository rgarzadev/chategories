import React from 'react';
import firebase from "../../firebase"
import 'firebase/auth';
import { Container, makeStyles } from '@material-ui/core';
import "./MyUserNameCard.css";
const auth = firebase.auth();

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));

function MyUserNameCard() {
    const classes = useStyles();

    const navStyle = {
        color: 'white'
    };
    const {  photoURL, displayName } = auth.currentUser;
    return (
        <div className= "ContentArea">
        <Container className="MyUserNameCard" maxWidth="sm">
            <div className="container">
              <div className="row">
                  <img className="col-4 MyUserImage"src={photoURL}></img>
                  <div className="col-8 MyUserNamePlate">{displayName}</div>
              </div>
            </div>
        </Container>
        </div>
    )
}

export default MyUserNameCard;