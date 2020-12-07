import React from 'react';
import { Container } from '@material-ui/core';
import firebase from "../../firebase";
import { useParams } from 'react-router-dom'
import {Link} from "react-router-dom"
import { useCollectionData } from 'react-firebase-hooks/firestore'
import "./OtherUserMyPosts.css";

const firestore = firebase.firestore();

function OtherUserMyPosts() {
    let { uid } = useParams();
    const topicsRef = firestore.collection('topics');
    const query = topicsRef.where('author', '==', uid).limit(25)
    const [topics] = useCollectionData(query, { idField: 'id' });

    return (
        <div className="ContentArea">

            <div className= "ContentArea">

                <h5> Recent Posts: </h5>

                <Container className="OtherUserMyPosts" maxWidth="sm">

                    <div className="OtherUserRecentPosts">
                    {topics && topics.map(topic => <Topics key={topic.id} message={topic}  />)} 
                    </div>

                </Container>

            </div>

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

export default OtherUserMyPosts;