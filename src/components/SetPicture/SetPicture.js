import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import firebase from "../../firebase";
import 'firebase/auth';
import './SetPicture.css';
const auth = firebase.auth();

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        maxWidth: 345,
    },
    input: {
      display: 'none',
    }
}));

export default function SetPicture() {
    const classes = useStyles();
    const { photoURL } = auth.currentUser;

    return (
        <Container className=''>
            <Card className={` ProfileCard ${classes.root}`}>
               
                <CardActionArea>
                    <CardMedia
                        component='img'
                        className={classes.media}
                        image={photoURL}
                        title="User Profile Image"
                    />
                </CardActionArea>
                <CardActions>
                    <div className={classes.root}>
                        <input
                            accept="image/*"
                            className={classes.input}
                            id="contained-button-file"
                            multiple
                            type="file"
                        />
                        <label htmlFor="contained-button-file">
                            <Button variant="contained" color="primary" component="span">
                                Upload New Picture
                            </Button>
                        </label>
                    </div>
                </CardActions>
            </Card>
        </Container>
    );
}