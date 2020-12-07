import React from 'react';
import { Container } from '@material-ui/core';
import firebase from "../../firebase";
import {useParams} from 'react-router-dom'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import "./OtherUserAboutMe.css";

const firestore = firebase.firestore();

function OtherUserAboutMe() {
    let {uid} = useParams();

    const usersRef = firestore.collection('users');
    const query = usersRef.where('uid', '==', uid).limit(1)
    const [users] = useCollectionData(query, { idField: 'id' });

    return (

        <div className="ContentArea">

            <div className= "ContentArea">

                <h5> Bio:</h5>

                <Container className="bioContainer" maxWidth="sm">

                    <div className="bioBox">
                    {users && users.map(user => <Bio key={user.id} message={user} />)}
                    </div>

                </Container>

            </div>

            <br></br>

        </div>

    )
}

function Bio(props) {
    const {bio} = props.message;
    return(
      <div>{bio}</div>
    )
  }

export default OtherUserAboutMe;