import React, {useState} from 'react';
import {Modal} from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import firebase from "../../firebase";
import { makeStyles } from '@material-ui/core';
import './SetBio.css';
import 'firebase/auth';

const auth = firebase.auth();
const firestore = firebase.firestore();

const useStyles = makeStyles((theme) => ({
    input: {
        maxWidth: true
    }
}))

const SetBio = (props) => {
    const classes = useStyles();
    const { uid } = auth.currentUser;
    const [value, setValue] = useState('');
    const usersRef = firestore.collection('users');

    const updateBio = async (e) => {
        await usersRef.doc(uid).update({
            bio: value
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
                    <TextField fullWidth="true" className={classes.input} label="Update About Me" variant="outlined" value={value} onChange={(e) => setValue(e.target.value)}/><br/>
                </div>
                <br></br>
                <div className="UpdateButton">
                    <Button variant="contained" type="submit " color="secondary" onClick={updateBio}>Update</Button>
                </div>
            </Modal.Body>
        </Modal>    
    );
}

export default SetBio;