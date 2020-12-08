import React from 'react';
import { Button } from '@material-ui/core';
import ChategoryTopicsList from "../../components/ChategoryTopicsList/ChategoryTopicsList";
import ChategoryNameCard from "../../components/ChategoryNameCard/ChategoryNameCard";
import AddNewTopic from "../../components/AddNewTopic/AddNewTopic";
import firebase from "../../firebase"
import {useParams} from 'react-router-dom'
import 'firebase/auth';
import "./SelectedChategory.css";

const auth = firebase.auth();
const firestore = firebase.firestore();


function SelectedChategory() {
    const { uid } = auth.currentUser;
    let {id} = useParams();
    
    

    const onButtonClick = () => {
        const chategoriesRef = firestore.collection("chategories").doc(id);
        // const [chategories] = useCollectionData(query, {idfield: 'id'})
        chategoriesRef.update({
            savedusers: firebase.firestore.FieldValue.arrayUnion(uid)
        }).then(() => {
            console.log(chategoriesRef);
        }).catch((error) => {
            console.log(error)
        })    
    }
    

    const [modalShow, setModalShow] = React.useState(false);

    return (

        <div>

            <div className="container TopBottomMargin">

                <div className="row">

                    <div className="col AlignCenter">

                        <div className="container MuiContainer-maxWidthSm">
                            <h5 className="PageTitle">~ Selected Chategory ~</h5>
                        </div>

                        <ChategoryNameCard />

                        <br/>

                        <div className="AddToMyChategories">
                            <Button variant="contained" color="primary" onClick={() => onButtonClick()} >Add to MY Chategories</Button>
                        </div>

                        <br/>

                        <ChategoryTopicsList/>

                        <br/>

                        <Button variant="contained" color="primary" onClick={() => setModalShow(true)}>Add a NEW Topic</Button>

                        <AddNewTopic show={modalShow} onHide={() => setModalShow(false)} />

                    </div>

                </div>

            </div>

        </div>



    )
}

export default SelectedChategory;