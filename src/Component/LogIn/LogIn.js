import React, { useContext } from 'react';
import firebase from 'firebase/app'
import "firebase/auth"
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { Button } from 'react-bootstrap';

const LogIn = () => {
    const [loggedInUser,setLoggedInUser] = useContext(userContext)
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0 ) {
        firebase.initializeApp(firebaseConfig)
    }
   
    const handleGoogleSingIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          const {displayName, email } = result.user;
          const newSignInUser = {name: displayName, email: email}
          console.log(newSignInUser);
         setLoggedInUser(newSignInUser)
         history.replace(from);
        })
    }
    return (
        <div className="text-center mt-4">
            
            <h1>This is Login</h1>
            <Button variant="success" onClick={handleGoogleSingIn} >Google SignIn </Button>
        </div>
    );
    };
export default LogIn;