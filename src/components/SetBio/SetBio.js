import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import firebase from "../../firebase";
import { Container } from '@material-ui/core';
import './SetBio.css';

import 'firebase/auth';
const auth = firebase.auth();
const firestore = firebase.firestore();

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function SetBio() {
    const classes = useStyles();

    const { uid } = auth.currentUser;
    const usersRef = firestore.collection('users').doc(uid);

    const bio = usersRef.bio || "Tell us about yourself!"

    return (

        <Container className="BioForm">
            <form className={classes.root} noValidate autoComplete="off"> 
                <TextField
                    id="outlined-multiline-static"
                    fullWidth="true"
                    label="About Me"
                    multiline
                    rows={4}
                    // defaultValue={bio}
                    variant="outlined"
                />
                <br></br>
                <Button size="small" color="primary">Update About Me</Button>
            </form> 
        </Container>
        
    );
}