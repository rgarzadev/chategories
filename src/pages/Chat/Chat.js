import React, { useRef, useState } from 'react';
import Link from '@material-ui/core/Link';
import firebase from "../../firebase"
import {useParams} from 'react-router-dom'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import "./Chat.css";

const auth = firebase.auth();
const firestore = firebase.firestore();
function Chat() {
    let {id} = useParams();
    console.log(id)
    const dummy = useRef();
    const messagesRef = firestore.collection(id);
    const query = messagesRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(query, { idField: 'id' });
    const [formValue, setFormValue] = useState('');
    const sendMessage = async (e) => {
      e.preventDefault();
      const { uid, photoURL, displayName } = auth.currentUser;
      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL, 
        displayName
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
    const { text, uid, photoURL, displayName} = props.message;
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    console.log(uid)
    return (<>
      <div className={`message ${messageClass}`}>
        <Link to={'/chat/' + uid}>{displayName}</Link>
        <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
        <p>{text}</p>
      </div>
    </>)
  }

export default Chat;