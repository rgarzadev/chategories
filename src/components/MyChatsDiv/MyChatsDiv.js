import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button } from '@material-ui/core';
import firebase from '../../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore'

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
          {dmUsers && dmUsers.map(dmUser => <DM key={dmUser.id} message={dmUser} />)}
        </div>
      </Container>
    </div>
  )
}

function DM(props) {
  const {id} = props.message;
  console.log(props)
  return (
    <div>
      {/* <Link to={'/chat/' + id}>{title}</Link> */}
      <Button variant="outlined" color="secondary" href={'/chat/' + id}>Direct Message</Button>

    </div>
  )
}

export default MyChatsDiv;