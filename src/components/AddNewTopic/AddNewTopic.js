import React, {useState} from 'react';
import { Modal } from 'react-bootstrap';
import {Button, TextField} from '@material-ui/core';
import firebase from "firebase/app"
import {useParams} from 'react-router-dom';
import "./AddNewTopic.css";

const firestore = firebase.firestore();
const auth = firebase.auth();

const AddNewTopic = (props) => {
   const { uid } = auth.currentUser;
    let {id} = useParams();
    const topicsRef = firestore.collection('topics');
    const [formValue, setFormValue] = useState('');

    const createTopic = async (e) => {
        await topicsRef.doc(id+formValue).set({
            title: formValue,
            chategory: id,
            crat: firebase.firestore.FieldValue.serverTimestamp(),
            id: formValue,
            author: uid
          })
          setFormValue('');
    }
    

        
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                {/* <div className="Name">
                    <TextField fullWidth="true" label="New Chategory Name" variant="outlined" onChange={()=>onChategoryFieldChange()}/><br/>
                </div> */}

                <div className="Topic">
                    <TextField fullwidth="true" label="New Chategory Topic" variant="outlined" value={formValue} onChange={(e) => setFormValue(e.target.value)}/><br/>
                </div>

                <div className="AddNewButton">
                    <Button variant="contained" type="submit " color="secondary" onClick={createTopic}>Add NEW Topic</Button>
                </div>

            </Modal.Body>
        </Modal>
    )
}

export default AddNewTopic;