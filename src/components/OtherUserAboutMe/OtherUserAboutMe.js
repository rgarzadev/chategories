import React from 'react';
import { Container } from '@material-ui/core';
import "./OtherUserAboutMe.css";
import OtherUserChategories from "../OtherUserChategories/OtherUserChategories"



function OtherUserAboutMe() {
    return (

        <div className="ContentArea">

            <div className= "ContentArea">

                <h5> Bio:</h5>

                <Container className="bioContainer" maxWidth="sm">

                    <div className="bioBox">

                    </div>

                </Container>

            </div>

                <h5> My Chategories </h5>

            <OtherUserChategories />

            <br></br>

        </div>

    )
}

export default OtherUserAboutMe;