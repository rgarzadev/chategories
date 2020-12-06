import React from 'react';
import { Container } from '@material-ui/core';
import "./OtherUserMyPosts.css";



function OtherUserMyPosts() {
    return (
        <div className="ContentArea">

            <div className= "ContentArea">

                <h5> Recent Posts: </h5>

                <Container className="OtherUserMyPosts" maxWidth="sm">

                    <div className="OtherUserRecentPosts">

                    </div>

                </Container>

            </div>

        </div>
    )
}

export default OtherUserMyPosts;