import React from 'react';
import firebase from "../../firebase"
import 'firebase/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import "./MyUserNameCard.css";
const auth = firebase.auth();
const firestore = firebase.firestore();

function MyUserNameCard() {
    const { uid } = auth.currentUser;

    const usersRef = firestore.collection('users'); 
    const query = usersRef.where('uid', '==', uid).limit(1)

    const [users] = useCollectionData(query, { idField: 'id' });
    
    return (
        <div className= "ContentArea">
        <Container className="MyUserNameCard" maxWidth="sm">
            <div className="container">
              <div className="row">
                  {/* <img className="col-4 MyUserImage" src={photoURL} alt="photoURL"></img> */}
                  <div className="col MyUserNamePlate">
                    {users && users.map(user => <User key={user.id} message={user} />)}

                  </div>
              </div>

              {/* <Link to={'/mychats'}>
                <IconButton color="inherit">
                  <ForumIcon fontSize="large" />
                </IconButton>
              </Link> */}

            </div>
      </Container>
    </div>
  )
}

function User(props) {
  const { displayName, photoURL } = props.message;
  return (

    <div className='container center-container'>
      <br></br>

      <div className='row photo'>
        <div className="col">
          <img  className="MyUserImage" src={photoURL} alt="photoURL"></img>
        </div>
      </div>

      <hr></hr>

      <div className='row namePlate'>
        <div className='col MyUserNamePlate'><h2>{displayName}</h2></div>
      </div>

      <br></br>
    </div>

  )
}

export default MyUserNameCard;