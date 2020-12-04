import React, { Component, useEffect, useRef, useState } from 'react';
import firebase from "firebase/app"
import 'firebase/firestore';
import {useParams} from 'react-router-dom'
import { useCollectionData } from 'react-firebase-hooks/firestore';

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
    
    const auth = firebase.auth();
    const firestore = firebase.firestore();


function ChatRoom() {
    let {id} = useParams();
    console.log(id)
    const dummy = useRef();
    const messagesRef = firestore.collection(id);
    const query = messagesRef.orderBy('createdAt').limit(25);
  
    const [messages] = useCollectionData(query, { idField: 'id' });
  
    const [formValue, setFormValue] = useState('');
  
  
    const sendMessage = async (e) => {
      e.preventDefault();
  
      const { uid, photoURL } = auth.currentUser;
  
      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      })
  
      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
  
    return (<>
      <main>
  
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
  
        <span ref={dummy}></span>
  
      </main>
  
      <form onSubmit={sendMessage}>
  
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
  
        <button type="submit" disabled={!formValue}>🕊️</button>
  
      </form>
    </>)
  }
  
  
  function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
  
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
    return (<>
      <div className={`message ${messageClass}`}>
        <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
        <p>{text}</p>
      </div>
    </>)
  }
  export default ChatRoom;