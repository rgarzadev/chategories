import React from 'react';
import Switch from '../../components/Switch/Switch';
import MyChategories from '../../components/MyChategories/MyChategories';
import MyPosts from '../../components/MyPosts/MyPosts';

import MyUserNameCard from "../../components/MyUserNameCard/MyUserNameCard";


import firebase from "firebase"
import "./Home.css";
const auth = firebase.auth();
const firestore = firebase.firestore();

function Home() {

    const{uid, displayName, photoURL} = auth.currentUser;
    const usersRef = firestore.collection('users').doc(uid);
    usersRef.get().then(function(doc){
      if (!doc.exists){
        usersRef.set({
        uid,
        displayName,
        photoURL,
        bio: "This user has not set a bio yet"
        })
      }
    })
    return (
        <div>

            <br/>

            <MyUserNameCard />

            <div className="container">

                <div className="row">

                    <div className="col AlignCenter">

                        <div className="AlignCenter">
                        <Switch left={<h6>My Chategories</h6>} right={<h6>My Posts</h6>} LDisplay={<MyChategories />} RDisplay={<MyPosts />} />
                        </div>

                    </div>

                </div>

            </div>
            
        </div>
    )
}

export default Home;