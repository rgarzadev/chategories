import React from 'react';
import { Link } from 'react-router-dom';
import { Container, IconButton, makeStyles } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import firebase from "../../firebase";
import { useParams } from 'react-router-dom'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import "./OtherUserNameCard.css";
const auth = firebase.auth();
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
  const sender = auth.currentUser.uid
  const chatters = [uid, sender]
  const sorted = chatters.sort().toString()
  console.log(sorted)
 
  const usersRef = firestore.collection('users');
  const query = usersRef.where('uid', '==', uid).limit(1)
  const query2 = usersRef.where('uid', '==', sender);
  const [authUsers] = useCollectionData(query2, { idField: 'id' });
  console.log(authUsers)
  const [users] = useCollectionData(query, { idField: 'id' });
  console.log(users)

  const dmsRef = firestore.collection('dms')

  const addDM = async(e) => {
    console.log("creatingdm");
    
    await dmsRef.doc(sorted).set({
      users: [uid, sender],
      title: sorted,
      photo1: authUsers[0].photoURL,
      photo2: users[0].photoURL,
      displayName1: authUsers[0].displayName,
      displayName2: users[0].displayName
    })
  }

  return (
    <div className="ContentArea">
      <Container className="OtherUserNameCard" maxWidth="sm">
        <div className="container">
          <div className="row">
            <div className="col-3 OtherUserImage">{users && users.map(user => <OtherUser key={user.id} message={user} />)}</div>
            <div className="col-3 ChatIcon">
              <Link to={'/chat/' + sorted}>
                <IconButton color="inherit" className={classes.centerButton} onClick={addDM}>
                  <ForumIcon fontSize="large" />
                </IconButton>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function OtherUser(props) {
  // const displayName = props.messsage.displayName
  const displayName = props.message.displayName
  const photoURL = props.message.photoURL
  return (
    <>
      <img src={photoURL}></img>
      <div className="col-6 OtherUserNamePlate">{displayName}</div>
    </>
  )
}

export default OtherUserNameCard;