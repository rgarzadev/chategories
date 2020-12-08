import firebase from "firebase/app"
import './SignIn.css';

const mystyle = {
  verticalAlign:"middle"
};

const auth = firebase.auth();
function SignIn() {
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider); 
    }
    return (
              <div>
                <br></br>
                  <div className="row">                    
                      <div className="col AlignCenter">
                          <div className="AlignCenter">
                            <button className="sign-in" style={mystyle} onClick={signInWithGoogle}><span>Sign in</span> </button>
                              <hr></hr>
                          </div>
                      </div>
                  </div>
              </div>
    )
  }
  export default SignIn