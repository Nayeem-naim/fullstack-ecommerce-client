import React, { useContext } from 'react';
import firebase from 'firebase/app'
import "firebase/auth"
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

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
        //  storeFirebaseToken()
         history.replace(from);
        })
    }
//     // const storeFirebaseToken = ()=>{
//     //     firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
//     //         sessionStorage.setItem('token', idToken)
//     //       }).catch(function(error) {
//     //         // Handle error
//     //       });

//     // }
    return (
        <div className="text-center">
            
            <h1>This is Login</h1>
            <button onClick={handleGoogleSingIn} >Google SignIn </button>
        </div>
    );
    };
export default LogIn;