import React from 'react';

import { Button } from '@material-ui/core';

import ChategoryTopicsList from "../../components/ChategoryTopicsList/ChategoryTopicsList";
import ChategoryNameCard from "../../components/ChategoryNameCard/ChategoryNameCard";
import AddNewTopic from "../../components/AddNewTopic/AddNewTopic";


import "./SelectedChategory.css";


function SelectedChategory() {

    const onButtonClick = (event) => {
        console.log("make api call");
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