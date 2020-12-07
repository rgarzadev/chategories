import React from 'react';
import { Container } from '@material-ui/core';
import firebase from "../../firebase";
import { useParams } from 'react-router-dom'
import {Link} from "react-router-dom"
import { useCollectionData } from 'react-firebase-hooks/firestore'
import "./OtherUserChategories.css";

const firestore = firebase.firestore();

function OtherUserChategories() {
    let { uid } = useParams();
    console.log(uid)
    const chategoriesRef = firestore.collection('chategories');
    const query = chategoriesRef.where('savedusers', 'array-contains', uid).limit(25)
    const [chategories] = useCollectionData(query, { idField: 'id' });
    console.log(chategories)

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
    return (<>
        <div>
            <Link to={'/topic/' + title}>{title}</Link>
        </div>
    </>
    )
}

export default OtherUserChategories;