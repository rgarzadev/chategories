import React from 'react';
import "./otherUserProfile.css";

import OtherUserNameCard from '../../components/OtherUserNameCard/OtherUserNameCard';
import OtherUserAboutMe from '../../components/OtherUserAboutMe/OtherUserAboutMe';
import OtherUserMyPosts from '../../components/OtherUserMyPosts/OtherUserMyPosts';
import ProfileDisplayName from '../../components/ProfileDisplayName/ProfileDisplayName';


import Switch from '../../components/Switch/Switch';



function otherUserProfile() {
    return (

        <div className="container">

            <br></br>

            <ProfileDisplayName className="profile-display-name" />

            <OtherUserNameCard />

                <div className="row">

                    <div className="col AlignCenter">

                        <br></br>

                    <>
                    <Switch left="About Me" right="My Posts" LDisplay={<OtherUserAboutMe/>} RDisplay={<OtherUserMyPosts/>}/>
                    </>

                    </div>

                </div>


        </div>

        
    )
}

export default otherUserProfile;