import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import Nav from "./components/Nav/Nav";
import NoMatch from "./pages/NoMatch/NoMatch";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Settings from "./pages/Settings/Settings";
import MyChats from "./pages/MyChats/MyChats";
import Chat from "./pages/Chat/Chat";
import SignIn from "./pages/SignIn/SignIn"
import Footer from "./components/Footer/Footer";
import OtherUserProfile from "./pages/OtherUserProfile/otherUserProfile"
import SelectedChategory from "./pages/SelectedChategory/SelectedChategory"

import firebase from "firebase/app"
import 'firebase/firestore';
import 'firebase/auth';




// import { ThemeProvider } from '@material-ui/core/styles'
// import CssBaseline from '@material-ui/core/CssBaseline'
// import theme from './theme'
import './App.css';
const auth = firebase.auth();

function App() {
  const [user] = useAuthState(auth);

  return (
    // <ThemeProvider theme={theme}>
      // <CssBaseline />
        <Router>
          <Nav/>
          <Switch>

            {user ? <Route path="/" exact component={Home}/> : 
            <Route path="/" component={SignIn} exact />}
            <Route exact path="/search" component={Search}/>
            <Route exact path="/mychats" component={MyChats}/>
            <Route exact path="/chat/:id" component={Chat}/>
            <Route exact path="/settings" component={Settings}/>
            <Route exact path="/topic/:id" component={SelectedChategory}/>
            <Route exact path="/chat/:uid" component={OtherUserProfile}/>
            <Route path="/*" component={NoMatch}/>

          </Switch>

          {user ? <Footer/> : null}

        </Router>
    // </ThemeProvider>
  );
}

export default App;
