import React, { useContext } from 'react';
import './Login.css';
import logo from '../../images/logos/logo.png';
import google from '../../images/icons/google.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';


const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };

  // Initialize Firebase
  if (firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
  }


  const googleLogin = () => {

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(googleProvider).then(function(result) {
      const {displayName, email, photoURL} = result.user;
      const signnedUser = {userName: displayName, userEmail: email, userImage: photoURL};
      setLoggedInUser(signnedUser);
      history.replace(from);
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }
  return (
    <div className="loginPage container">
     <div className="d-flex justify-content-center mt-5">
        <Link to="/">
          <img  className="logo" src={ logo } alt=""/>
        </Link>
     </div>
     <div className="row">
        <div className="col-md-6 offset-md-3 col-sm-12 col-12">
          <div className="login">
            <h3>Login With</h3>
            <button onClick={ googleLogin } className="d-flex justify-content-center mt-5">
              <img style={{ width: '22px', height: '22px', marginRight: '10px' }} src={ google } alt=""/>
              <p style={{ marginBottom: '0px' }} className="">Continue with Google</p>
            </button>
            <p className="mt-3">Don’t have an account ? <a href="">Create an account</a></p>
          </div>
        </div>
     </div>
    </div>
  );
};

export default Login;