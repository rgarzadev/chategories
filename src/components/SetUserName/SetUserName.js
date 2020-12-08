import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import firebase from "../../firebase";
import 'firebase/auth';
import './SetUserName';

const auth = firebase.auth();
const firestore = firebase.firestore();

const useStyles = makeStyles((theme) => ({
    input: {
        maxWidth: true
    }
}));

const SetUserName = (props) => {
    const classes = useStyles();
    const { uid } = auth.currentUser;
    const [value, setValue] = useState('');
    const usersRef = firestore.collection('users');

    const updateUserName = async (e) => {
        await usersRef.doc(uid).update({
            displayName: value
        })
        setValue('');   
    }

    return (
        <Modal
            {...props}
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'
            centered
        >
            <Modal.Body>
                <div className="Bio">
                    <TextField className={classes.input} label="Update Display Name" variant="outlined" value={value} onChange={(e) => setValue(e.target.value)}/><br />
                </div>
                <div className="UpdateButton">
                    <Button variant="contained" type="submit " color="primary" onClick={updateUserName}>Update</Button>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default SetUserName;