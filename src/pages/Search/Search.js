import { makeStyles, Container } from '@material-ui/core';
import React, { useState } from 'react';
import { TextField, Switch, Button } from '@material-ui/core';
import AddNewChategory from '../../components/AddNewChategory/AddNewChategory';
import NewestChategories from '../../components/NewestChategories/NewestChategories';
import SearchResults from '../../components/SearchResults/SearchResults';
import useDebounce from "../../useDebounce"
import "./Search.css";
import firebase from "firebase"
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {Link} from "react-router-dom"
const firestore = firebase.firestore();
function Search() {

    const [toggleState, setToggleState] = useState(false);
    const [search, setSearch] = useState("");
    const [modalShow, setModalShow] = React.useState(false);
    
    
    
    const handleInputChange = event => {
        setSearch(event.target.value);
      };
    const onSearchFieldClick = (event) => {
        setToggleState(true);
    }
    const debouncedSearchTerm = useDebounce(search, 500);
    const usersRef = firestore.collection('chategories');
    const query = usersRef.where("title", "==", debouncedSearchTerm).limit(25);
    const [chategories] = useCollectionData(query, { idField: 'id' });
    
    console.log(chategories)

    return (

        <div className="TopBottomMargin">

            <div className="container MuiContainer-maxWidthSm">

                <div className="row">

                    <div className="col TextFieldPadding">

                        <TextField fullWidth="true" label="Search" variant="outlined" onClick={() => onSearchFieldClick()}  onChange={handleInputChange} /><br />

                    </div>

                </div>

            </div>


            <div className="container">

                <div className="row">

                    <div className="col AlignCenter">

                        {<h6>New Chategories</h6>} <Switch checked={toggleState} onChange={() => setToggleState(!toggleState)} /> {<h6>Search Results</h6>}

                        <div>{toggleState ?  <div className= "ContentArea"><Container className="SearchResults" maxWidth="sm"><div className="container">{chategories && chategories.map(chategory => <Chategory key={chategory.id} message={chategory} />)} 
                </div>
        </Container>
        </div>  : <NewestChategories/>}</div>

                        <Button variant="contained" color="primary" onClick={() => setModalShow(true)}>Add a NEW Chategory</Button>

                        <AddNewChategory show={modalShow} onHide={() => setModalShow(false)} />

                    </div>

                </div>

            </div>

        </div>
    )
}
function Chategory(props) {
 
    const { title } = props.message;
  return (<>
      <div>
      <Link to={'/topic/' + title}>{title}</Link>
     </div>
    </>)
  }
  
export default Search;