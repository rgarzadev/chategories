import React from 'react';

import ProfileDisplayName from '../../components/ProfileDisplayName/ProfileDisplayName';
import MyChatsDiv from '../../components/MyChatsDiv/MyChatsDiv';



function MyChats() {
    return (

        <div>

            <div className="container MuiContainer-maxWidthSm">
                <h5 className="PageTitle">My Chats:</h5>
            </div>

            <MyChatsDiv />

        </div>

    )
}

export default MyChats;