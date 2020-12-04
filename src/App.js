import React, { useRef, useState } from 'react';
import './App.css';
import firebase from "firebase/app"
import 'firebase/firestore';
import 'firebase/auth';
import Nav from './components/Nav';
// import Home from './components/Home';
import Footer from "./components/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ChatRoom from './components/Chatrooms'
import Topic from './components/Topic'
import { useAuthState } from 'react-firebase-hooks/auth';
import Chategory from './components/Chategory';
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
function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <BrowserRouter>
      <SignOut />
      <Nav />
      <Switch>
      {user ? <Route path="/" component={Chategory} exact /> : <Route path="/" component={SignIn} exact />}
      <Route path="/chat/:id" component={ChatRoom} />
      <Route path="/topic/:id" component={Topic} />
      </Switch>
      {/* {user ? <Footer /> : null} */}
      </BrowserRouter>
    </div>
  );
}
function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
    </>
  )
}
function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}
export default App;