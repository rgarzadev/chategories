import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button } from '@material-ui/core';
import firebase from '../../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import "./MyChatsDiv.css";

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

function MyChatsDiv() {
  const classes = useStyles();

  const navStyle = {
    color: 'white'
  };

  const { uid } = auth.currentUser;

  const dmsRef = firestore.collection('dms');
  const query = dmsRef.where("users", 'array-contains', uid);
  const [dmUsers] = useCollectionData(query, { idField: 'id' });
  console.log(dmUsers)

  return (
    <div className="ContentArea">
      <Container className="MyChatsDiv" maxWidth="sm">
        <div className="container">
          {dmUsers && dmUsers.map(dmUser => <DM key={dmUser.id} id={dmUser.id} displayName1={dmUser.displayName1} displayName2={dmUser.displayName2}/>)}
        </div>
      </Container>
    </div>
  )
}

function DM(props) {
  // const uid = auth.currentUser.uid;
  // const usersRef = firestore.collection('users');
  // const query = usersRef.where('uid', '==', uid);
  // const users = useCollectionData(query, { idField: 'id'});
  // let userName;
  // if (users.displayName !== props.displayName1) {
  //   userName = props.displayName2
  // } else {
  //   userName = props.displayName1
  // }
  
  return (
    <div>
      {/* <Link to={'/chat/' + id}>{title}</Link> */}
      <Button variant="outlined" color="secondary" href={'/chat/' + props.id}>{props.displayName1 + " & " + props.displayName2}</Button>
    </div>
  )
}

export default MyChatsDiv;