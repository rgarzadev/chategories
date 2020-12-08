import React from 'react';
import { Button, Container } from '@material-ui/core';
import firebase from "../../firebase";
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom"
import { useCollectionData } from 'react-firebase-hooks/firestore'
import "./OtherUserChategories.css";



const firestore = firebase.firestore();

const auth = firebase.auth();

function OtherUserChategories() {
    let { uid } = useParams();
    const chategoriesRef = firestore.collection('chategories');
    const query = chategoriesRef.where('savedusers', 'array-contains', uid).limit(25)
    const [chategories] = useCollectionData(query, { idField: 'id' });

    return (
        <div className="ContentArea">
            <Container className="OtherUserChategories" maxWidth="sm">
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

            <Button variant="outlined" color="secondary" href={'/topic/' + title}>{title}</Button>

        </div>
    </>
    )
}

export default OtherUserChategories;