import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import firebase from "firebase"
import "./MyChategories.css";
import 'firebase/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {Link} from "react-router-dom"
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
    const{uid} = auth.currentUser;
    console.log(uid)
    const usersRef = firestore.collection('chategories');
    const query = usersRef.where("savedusers", 'array-contains', uid).limit(25);
    const [chategories] = useCollectionData(query, { idField: 'id' });
    
    console.log(chategories)
   
    
   return (
     
        <div className= "ContentArea">
        <Container className="MyChategories" maxWidth="sm">
            <div className="container">
            
            {chategories && chategories.map(chategory => <Chategory key={chategory.id} message={chategory}  />)} 
                </div>
        </Container>
        </div>
    )


}
function Chategory(props) {
 
  const { title } = props.message;
return (<>
    <div>
    <Link to={'/topic/' + title}>{title}</Link>
   </div>
  </>)
}

export default MyChategories;