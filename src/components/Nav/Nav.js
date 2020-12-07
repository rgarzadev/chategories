import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import 'firebase/auth';
import { useHistory } from "react-router-dom";

import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import "./Nav.css";

import firebase from "../../firebase"
<<<<<<< HEAD
{/* <Button color="inherit">Login</Button> */ }



=======

import './Nav.css';
{/* <Button color="inherit">Login</Button> */}
>>>>>>> 67b105a18b3ec72ba155991e3891440e47550e9d

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
<<<<<<< HEAD
        <AppBar position="sticky">
            <Toolbar>

                <div className="container">

                    <div className="row">

                        <div className="col-4 nav-grid align-self-center">

                            <Link style={navStyle} to="/">
                                <IconButton edge="start" color="inherit" aria-label="menu">
                                    <ArrowBackIcon onClick={() => history.goBack()} fontSize="large" />
                                </IconButton>
                            </Link>
                        </div>

                        <div className="col-4 nav-grid align-self-center">

                            <Typography style={navStyle} align="center" variant="h4" className={classes.title}>
                                C||G
                            </Typography>
                        </div>

                        <div className="col-4 nav-grid AlignRight">

                            {/* <Link style={ navStyle } href="https://youtube.com" target="_blank"> */}
                            <Link to={{ pathname: "/" }} target="_blank" style={navStyle}>
                                <IconButton edge="start" color="inherit" aria-label="menu">
                                    <Typography variant="button" display="inline" gutterBottom>
                                        Log Out
                                    </Typography>
                                    <HighlightOffIcon onClick={() => auth.signOut()} fontSize="large" />
                                </IconButton>
                            </Link>

                        </div>

                    </div>

                </div>

            </Toolbar>
=======
        
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
>>>>>>> 67b105a18b3ec72ba155991e3891440e47550e9d
        </AppBar>
        
    )
}

export default Nav;