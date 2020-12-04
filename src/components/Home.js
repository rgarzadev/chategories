import React, { useRef, useState } from 'react';
import firebase from "firebase/app"
import 'firebase/firestore';
import 'firebase/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {Link} from 'react-router-dom';
import {  Route } from "react-router-dom";
try {
    firebase.initializeApp({
      apiKey: "AIzaSyALKfxH4ZltFk_E66Z6-a4whQnVX1uCljo",
      authDomain: "chategories-57274.firebaseapp.com",
      projectId: "chategories-57274",
      storageBucket: "chategories-57274.appspot.com",
      messagingSenderId: "1090971846029",
      appId: "1:1090971846029:web:e8d48401de492012e4a9c4",
      measurementId: "G-6E1W11KY7Y"
    })
    } catch (err) {
      // we skip the "already exists" message which is
      // not an actual error when we're hot-reloading
      if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error raised', err.stack)
      }}
      // const auth = firebase.auth();
      const auth = firebase.auth();
      const firestore = firebase.firestore();
function Home() {
  
    // const dummy = useRef();
    const{uid} = auth.currentUser;
    const topicsRef = firestore.collection('topics');
    const query = topicsRef.where('author', '==', uid).limit(25);
    const [topics] = useCollectionData(query, { idField: 'id' });
    console.log(topics)
   
    
return(<>
<main>
  
{topics && topics.map(topic => <Topics key={topic.id} message={topic}  />)}
</main>
</>
)
}
function Topics(props) {
 
    const { title } = props.message;
return (<>
      <div>
      <Link to={'/chat/' + title}>{title}</Link>
     </div>
    </>)
  }
export default Home