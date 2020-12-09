import React from 'react';
import MyChatsDiv from '../../components/MyChatsDiv/MyChatsDiv';

function MyChats() {

    return (

        <div className="TopBottomMargin">

            <div className="container MuiContainer-maxWidthSm">
                <h5 className="PageTitle">My DMs:</h5>
            </div>

            <MyChatsDiv />

        </div>

    )
}

export default MyChats;