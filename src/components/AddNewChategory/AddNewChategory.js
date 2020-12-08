import React, {useState} from 'react';
import { Modal } from 'react-bootstrap';
import {Button, TextField} from '@material-ui/core';
import firebase from "firebase/app"
import "./AddNewChategory.css";
import { Link } from 'react-router-dom';
const firestore = firebase.firestore();
const auth = firebase.auth();
const AddNewChategory = (props) => {
    const { uid } = auth.currentUser;
    const topicsRef = firestore.collection('topics');
    const chategoriesRef = firestore.collection('chategories');
    const [formValue1, setFormValue1] = useState("");
    const [formvalue2, setFormValue2] = useState("");

    const createChategory = async (e) => {
        await chategoriesRef.doc(formValue1).set({
          title: formValue1,
          crat: firebase.firestore.FieldValue.serverTimestamp(),
          id: formValue1,
          savedusers: [uid]
          })
        await topicsRef.doc(formValue1 + formvalue2).set({
            title: formvalue2,
            chategory: formValue1,
            crat: firebase.firestore.FieldValue.serverTimestamp(),
            id: formvalue2,
            author: uid
          })
          setFormValue1('');
          setFormValue2('');
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <div className="Name">
                    <TextField fullwidth="true" label="New Chategory Name" variant="outlined" onChange={(e) => setFormValue1(e.target.value)}/><br/>
                </div>

                <div className="Topic">
                    <TextField fullwidth="true" label="New Chategory Topic" variant="outlined" onChange={(e) => setFormValue2(e.target.value)}/><br/>
                </div>

                <div className="AddNewButton">
                 <Link to={'/topic/' + formValue1}>
                    <Button variant="contained" color="primary" onClick={createChategory} >Add NEW Chategory</Button>
                </Link>
                </div>

            </Modal.Body>
        </Modal>
    )
}

export default AddNewChategory