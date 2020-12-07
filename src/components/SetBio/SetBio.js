import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import firebase from "../../firebase";
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
    const [value, setValue] = useState('');

    const updateBio = () => {
        const usersRef = firestore.collection('users').doc(uid)
        usersRef.update({
            userBio: value
        })
    }

    return (  
        <form className={classes.root} noValidate autoComplete="off"> 
            <TextField
                id="outlined-multiline-static"
                label="About Me"
                multiline
                rows={6}
                value={value}
                variant="outlined"
                onChange={(e) => setValue(e.target.value)}
            />
            <Button size="small" color="primary" onClick={() => updateBio()}>Update About Me</Button>
        </form> 
    );
}