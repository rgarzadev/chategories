import React from 'react';
import { Link } from 'react-router-dom';
import { Container, IconButton, makeStyles } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import firebase from "../../firebase";
import { useParams } from 'react-router-dom'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import "./OtherUserNameCard.css";
const firestore = firebase.firestore();

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

function OtherUserNameCard() {
  const classes = useStyles();

  const navStyle = {
    color: 'white'
  };

  let { uid } = useParams();

  const usersRef = firestore.collection('users');
  const query = usersRef.where('uid', '==', uid).limit(1)
  const [users] = useCollectionData(query, { idField: 'id' });

  return (
    <div className="ContentArea">

      <Container className="OtherUserNameCard" maxWidth="sm">

        <div className="container">

          <div className="row">
            <div className="col">
              <div className="OtherUserImage">
                {users && users.map(user => <OtherUser key={user.id} message={user} />)}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="ChatIcon">
                <Link to='/mychats'>
                  <IconButton color="secondary" className={classes.centerButton}>
                    <ForumIcon fontSize="large" />
                  </IconButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div >
  )
}

function OtherUser(props) {
  // const displayName = props.messsage.displayName
  const displayName = props.message.displayName
  const photoURL = props.message.photoURL
  return (
    <>
      <img src={photoURL}></img>
      <div className="col OtherUserNamePlate"><h2>{displayName}</h2></div>
    </>
  )
}

export default OtherUserNameCard;