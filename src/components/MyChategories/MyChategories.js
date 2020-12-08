import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button } from '@material-ui/core';
import firebase from "firebase"
import "./MyChategories.css";
import 'firebase/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Link } from "react-router-dom"
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



function MyChategories() {

  const classes = useStyles();
  const navStyle = {
    color: 'white'
  };
  const { uid } = auth.currentUser;
  const usersRef = firestore.collection('chategories');
  const query = usersRef.where("savedusers", 'array-contains', uid).limit(25);
  const [chategories] = useCollectionData(query, { idField: 'id' });

  return (

    <div className="ContentArea">
      <Container className="MyChategories" maxWidth="sm">
        <div className="container">

          {chategories && chategories.map(chategory => <Chategory key={chategory.id} message={chategory} />)}
        </div>
      </Container>
    </div>
  )
}
function Chategory(props) {
  const { title } = props.message;
  const {uid} = auth.currentUser;

  const onButtonClick = () => {
    const chategoriesRef = firestore.collection("chategories").doc(title);
    // const [chategories] = useCollectionData(query, {idfield: 'id'})
    chategoriesRef.update({
      savedusers: firebase.firestore.FieldValue.arrayRemove(uid)
    }).then(() => {
      console.log(chategoriesRef);
    }).catch((error) => {
      console.log(error)
    })
  }

  return (<>
    <div>
    {/* <Link to={'/topic/' + title}>{title}</Link> */}
    <Button variant="outlined" color="secondary" href={'/topic/' + title}>{ title }</Button>

   </div>
  </>)
}

export default MyChategories;