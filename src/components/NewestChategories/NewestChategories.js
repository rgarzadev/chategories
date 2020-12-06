import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import {Link} from 'react-router-dom';
import "./NewestChategories.css";
import firebase from "../../firebase"
import 'firebase/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
const firestore = firebase.firestore();
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));

function NewestChategories() {
    const classes = useStyles();

    const navStyle = {
        color: 'white'
    };
    const chategoriesRef = firestore.collection('chategories');
    const query = chategoriesRef.orderBy('crat').limit(25);
    const [chategories] = useCollectionData(query, { idField: 'id' });
    
    return (
        <div className= "ContentArea">
        <Container className="NewestChategories" maxWidth="sm">
            <div className="container">
            {chategories && chategories.map(chategory => <Chategories key={chategory.id} message={chategory}  />)}
                </div>
        </Container>
        </div>
    )
}
function Chategories(props) {
  const { title } = props.message;
return (<>
    <div>
    <Link to={'/topic/' + title}>{title}</Link>
   </div>
  </>)
}

export default NewestChategories;