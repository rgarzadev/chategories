import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import firebase from "../../firebase";
import { Container } from '@material-ui/core';

import 'firebase/auth';
import './SetUserName';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
}));

export default function SetUserName() {
    const auth = firebase.auth();
    const firestore = firebase.firestore();
    const classes = useStyles();
    const [value, setValue] = useState('');

    const { uid } = auth.currentUser;

    const updateUserName = () => {
        const userRef = firestore.collection('users').doc(uid)
        userRef.update({
            displayName: value
        })
    }

    return (
        <Container className='DisplayNameForm'>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    required
                    id="outlined-required"
                    fullWidth="true"
                    label="Display Name"
                    defaultValue=''
                    variant="outlined"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <Button size="small" color="primary" onClick={() => updateUserName()}>
                    Change Display Name
                </Button>
            </form>
        </Container>
    )
}