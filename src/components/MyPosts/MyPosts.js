import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container } from '@material-ui/core';
import firebase from "firebase"
import 'firebase/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import "./MyPosts.css";
import {Link} from 'react-router-dom';
import green from "@material-ui/core/colors/green";


const auth = firebase.auth();
const firestore = firebase.firestore();


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    postsStyle: {
      color: green[500]
    }
  }));

function MyPosts() {
    const classes = useStyles();
    const navStyle = {
        color: 'white'
    };
    const{uid} = auth.currentUser;
    const topicsRef = firestore.collection('topics');
    const query = topicsRef.where('author', '==', uid).limit(25);
    const [topics] = useCollectionData(query, { idField: 'id' });
   

    return (
        <div className= "ContentArea">
        <Container className="MyPosts" maxWidth="sm">
            <div className="container">
            {topics && topics.map(topic => <Topics key={topic.id} message={topic}  />)} 
                </div>
        </Container>
        </div>
    )
}
function Topics(props) {
  const classes = useStyles();
  const { title, id } = props.message;
return (<>
    <div>
    {/* <Link to={'/chat/' + id}>{title}</Link> */}
    <Button variant="outlined" className={classes.postsStyle} href={'/chat/' + id}>{title}</Button>

   </div>
  </>)
}


export default MyPosts;