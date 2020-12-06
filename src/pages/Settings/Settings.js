import React from 'react';
import { Container } from '@material-ui/core';
import SetBio from '../../components/SetBio/SetBio';
import SetPicture from '../../components/SetPicture/SetPicture';
import SetUsername from '../../components/SetUserName/SetUserName';
import firebase from "firebase"
import "./Settings.css";
import MyChategories from '../../components/MyChategories/MyChategories';

const auth = firebase.auth();
const firestore = firebase.firestore();

function Settings() {
    // const {uid, displayName, photoURL} =auth.currentUser;

    // const usersRef = firestore.collection('users').doc(uid)
    return (
        <div>

            <br></br>

            <h5> Edit Profile </h5>

            <br></br>

            <Container>
                <SetPicture />
                <SetUsername />
                <SetBio />
                <MyChategories />
            </Container>


        </div>

    )
}

export default Settings;