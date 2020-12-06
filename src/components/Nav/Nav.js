import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import 'firebase/auth';
import { useHistory } from "react-router-dom";

import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import firebase from "../../firebase"
{/* <Button color="inherit">Login</Button> */}

const auth = firebase.auth();

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));

function Nav() {
    const classes = useStyles();
    let history = useHistory();
    const navStyle = {
        color: 'white'
    };
   
    return (
        <AppBar position="static">
            <Toolbar>
                <Link style={ navStyle } to="/">
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <ArrowBackIcon onClick={() => history.goBack()} fontSize="large"/>
                </IconButton>
                </Link>

                <Typography style={ navStyle } align="center" variant="h4" className={classes.title}>
                    CG
                </Typography>

                {/* <Link style={ navStyle } href="https://youtube.com" target="_blank"> */}
                <Link to={{ pathname: "/" }} target="_blank" style={ navStyle }>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <HighlightOffIcon onClick={() => auth.signOut()} fontSize="large"/>
                    <Typography variant="button" display="block" gutterBottom>
              Log Out
            </Typography>
                </IconButton>
                </Link>

            </Toolbar>
        </AppBar>
    )
}

export default Nav;