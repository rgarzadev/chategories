import React from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore'
import firebase from '../../firebase';
import Switch from '../../components/Switch/Switch';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import OtherUserChategories from '../../components/OtherUserChategories/OtherUserChategories'
import OtherUserNameCard from '../../components/OtherUserNameCard/OtherUserNameCard';
import OtherUserAboutMe from '../../components/OtherUserAboutMe/OtherUserAboutMe';
import OtherUserMyPosts from '../../components/OtherUserMyPosts/OtherUserMyPosts';
import "./otherUserProfile.css";

const firestore = firebase.firestore();

function OtherUserProfile() {
  let { uid } = useParams();
  const usersRef = firestore.collection('users');
  const query = usersRef.where('uid', '==', uid).limit(1)

  const [users] = useCollectionData(query, { idField: 'id' });

  return (

    <div className="container TopBottomMargin">

      <br></br>

      <div className="profile-display-name">
        {users && users.map(user => <ProfileDisplayName key={user.id} message={user} />)}
      </div>

      <OtherUserNameCard />

      <div className="row">

        <div className="col AlignCenter">

          <br></br>

          <>

            <OtherUserAboutMe />

            <Switch left="MyChategories" right="My Posts" LDisplay={<OtherUserChategories />} RDisplay={<OtherUserMyPosts />} />
          </>

        </div>
      </div>
    </div>
  )
}

function ProfileDisplayName(props) {
  const { displayName } = props.message;
  return (
    <div className="OtherUserNamePlate" maxwidth="sm">
      <h5>{displayName}'s Profile</h5>
    </div>
  )
}

export default OtherUserProfile;