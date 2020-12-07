import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import firebase from "firebase/app"
import 'firebase/firestore';
import 'firebase/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import "./ChategoryTopicsList.css";
const firestore = firebase.firestore();

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));

function ChategoryTopicsList() {
    const classes = useStyles();

    const navStyle = {
        color: 'white'
    };
    
    let {id} = useParams();
    const topicsRef = firestore.collection('topics');
    const query = topicsRef.where('chategory', '==', id).limit(25);
    const [topics] = useCollectionData(query, { idField: 'id' });
    
    

    return (
        <div className= "ContentArea">
        <Container className="ChategoryTopicsList" maxWidth="sm">
            <div className="container">
            {topics && topics.map(topic => <Topics key={topic.id} message={topic}  />)}
                </div>
        </Container>
        </div>
    )
}
function Topics(props) {
  const { title, id } = props.message;
return (<>
    <div>
    <Link to={'/chat/' + id}>{title}</Link>
   </div>
  </>)
}


export default ChategoryTopicsList;