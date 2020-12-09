import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import 'firebase/auth';
import { useHistory } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import "./Nav.css";
import firebase from "../../firebase"
// {/* <Button color="inherit">Login</Button> */ }

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
        <AppBar position="sticky">
            <Toolbar>
                <div className="container">
                    <div className="row">
                        <div className="col-4 nav-grid AlignLeft">
                            <Link style={navStyle} to="/">
                                <IconButton edge="start" color="inherit" aria-label="menu">
                                    <ArrowBackIcon onClick={() => history.goBack()} fontSize="large" />
                                </IconButton>
                            </Link>
                        </div>
                        <div className="col-4 nav-grid align-self-center">
                            <Typography style={navStyle} align="center" variant="h4" className={classes.title}>
                                CG
                            </Typography>
                        </div>
                        <div className="col-4 nav-grid AlignRight">
                            {/* <Link style={ navStyle } href="https://youtube.com" target="_blank"> */}
                            <Link to={{ pathname: "/" }} target="_blank" style={navStyle}>
                                <IconButton edge="start" color="inherit" aria-label="menu">
                                    
                                        <Typography onClick={() => auth.signOut()} fontSize="large" variant="button" display="inline" gutterBottom>
                                            Log Out
                                        </Typography>

                                </IconButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </Toolbar>
        </AppBar>      
    )
}

export default Nav;