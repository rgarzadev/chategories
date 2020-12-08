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
import OtherUserProfile from "./pages/OtherUserProfile/OtherUserProfile"
import SelectedChategory from "./pages/SelectedChategory/SelectedChategory"
import {AuthProvider} from "./Auth"
import PrivateRoute from "./PrivateRoute"
import firebase from "./firebase"
import 'firebase/firestore';
import 'firebase/auth';
// import { ThemeProvider } from '@material-ui/core/styles'
// import CssBaseline from '@material-ui/core/CssBaseline'
// import theme from './theme'
import './App.css';
const auth = firebase.auth();
function App() {
  const [user] = useAuthState(auth);
console.log(user)
  return (
      <AuthProvider>
       <Router>
          <Nav/>
          <div className="content">
          <Switch>
            {user ? <Route path="/" exact component={Home}/> : 
            <Route path="/" component={SignIn} exact />}
            <PrivateRoute exact path="/search" component={Search}/>
            <PrivateRoute exact path="/mychats" component={MyChats}/>
            <PrivateRoute exact path="/chat/:id" component={Chat}/>
            <PrivateRoute exact path="/settings" component={Settings}/>
            <PrivateRoute exact path="/topic/:id" component={SelectedChategory}/>
            <PrivateRoute exact path="/otherprof/:uid" component={OtherUserProfile}/>
            <Route path="/*" component={NoMatch}/>
          </Switch>
          </div>
          {user ? <Footer/> : null}
        </Router>
        </AuthProvider>
  );
}
export default App;
