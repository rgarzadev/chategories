import React from 'react';
import { Container, Button } from '@material-ui/core';
import MyUserNameCard from '../../components/MyUserNameCard/MyUserNameCard';
import firebase from "firebase";
import SetBio from '../../components/SetBio/SetBio';
import SetUserName from '../../components/SetUserName/SetUserName';
import MyChategories from '../../components/MyChategories/MyChategories';
import "./Settings.css";
import { useCollectionData } from 'react-firebase-hooks/firestore';

const auth = firebase.auth();
const firestore = firebase.firestore();

function Settings() {
    let { uid, displayName } = auth.currentUser;

    const usersRef = firestore.collection('users');
    const query = usersRef.where('uid', '==', uid).limit(1)
    const [users] = useCollectionData(query, { idField: 'id' });
    const [modal, setShow] = React.useState(false);
    const [modalShow, setModalShow] = React.useState(false);

    return (
            <div>
                <h5 className='SettingsProfile' > Edit Profile </h5>
                <Container className='SettingsProfile'>
                    <MyUserNameCard />
                    <Button onClick={() => setShow(true)}>Edit Display Name/Picture</Button>
                    <SetUserName show={modal} onHide={() => setShow(false)} />
                    <hr></hr>
                    <div className="ContentArea">
                        <div className="ContentArea">
                            <h5>About Me:</h5>
                            <Container className="bioContainer" maxWidth="sm">
                                <div className="bioBox">
                                    {users && users.map(user => <Bio key={user.id} message={user} />)}
                                </div>
                            </Container>
                            <Button onClick={() => setModalShow(true)}>Edit About Me</Button>
                            <SetBio show={modalShow} onHide={() => setModalShow(false)} />
                        </div>
                    </div>
                    <hr></hr>
                    <h5>My Chategories</h5>
                    <MyChategories />
                </Container>
            </div>
    )
}

function Bio(props) {
    const {bio} = props.message;
    return(
      <div>{bio}</div>
    )
  }

export default Settings;