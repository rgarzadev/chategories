import React, { useState } from 'react';
import firebase from "firebase/app"
import 'firebase/firestore';
import 'firebase/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
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
function Topic() {
    // const dummy = useRef();
    let {id} = useParams();
    console.log(id);
    const topicsRef = firestore.collection('topics');
    const query = topicsRef.where('chategory', '==', id).limit(25);
    const [topics] = useCollectionData(query, { idField: 'id' });
    const [formValue, setFormValue] = useState('');
    const createTopic = async (e) => {
        e.preventDefault();
        await topicsRef.add({
          title: formValue,
          chategory: id,
          crat: firebase.firestore.FieldValue.serverTimestamp(),
          id: formValue
        })
        setFormValue('');
        // dummy.current.scrollIntoView({ behavior: 'smooth' });
      }
return(<>
<form onSubmit={createTopic}>
<input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="What do you want to chat about?" />
<button type="submit" disabled={!formValue}>🕊️</button>
</form>
<main>
{topics && topics.map(topic => <Topics key={topic.id} message={topic}  />)}
</main>
</>
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
export default Topic;