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
      const firestore = firebase.firestore();


function Home() {
    // const dummy = useRef();
    const chategoriesRef = firestore.collection('chategories');
    const query = chategoriesRef.orderBy('crat').limit(25);
  
    const [chategories] = useCollectionData(query, { idField: 'id' });
  
    const [formValue, setFormValue] = useState('');

    const createChategory = async (e) => {
        e.preventDefault();
    
        
    
        await chategoriesRef.add({
          title: formValue,
          crat: firebase.firestore.FieldValue.serverTimestamp(),
          id: formValue
        })
    
        setFormValue('');
        // dummy.current.scrollIntoView({ behavior: 'smooth' });
      }


return(<>
<form onSubmit={createChategory}>

<input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Chategory Title" />

<button type="submit" disabled={!formValue}>🕊️</button>

</form>
<main>
{chategories && chategories.map(chategory => <Chategory key={chategory.id} message={chategory}  />)}
</main>



</>
)
}
function Chategory(props) {
    const { title } = props.message;
return (<>
      <div>
      <Link to={'/chat/' + title}>{title}</Link>
     </div>
    </>)
  }
  


export default Home