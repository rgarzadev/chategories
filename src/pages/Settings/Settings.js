import React from 'react';
import { Container } from '@material-ui/core';
import SetBio from '../../components/SetBio/SetBio';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import SetUsername from '../../components/SetUserName/SetUserName';
import firebase from "firebase"
import "./Settings.css";
import MyChategories from '../../components/MyChategories/MyChategories';

const auth = firebase.auth();
const firestore = firebase.firestore();

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        maxWidth: 345,
    },
    input: {
      display: 'none',
    }
}));

function Settings() {
    const classes = useStyles();
    const { photoURL } = auth.currentUser;

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div>
                <br></br>
                <h5 className ='SettingsProfile' > Edit Profile </h5>
                <br></br>
                <Container className ='SettingsProfile'>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component='img'
                                className={classes.media}
                                image={photoURL}
                                title="User Profile Image"
                            />
                        </CardActionArea>
                    </Card>
                    <hr></hr>
                    <SetUsername />
                    <br></br>
                    <SetBio />
                    <hr></hr>
                    <MyChategories />
                </Container>
            </div>
        </div>

    )
}

export default Settings;