import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import '../style/SignIn.css';
import image from '../../images/logoRodeo.png';
import { FiUser, FiLock } from 'react-icons/fi';
import { FaGoogle } from 'react-icons/fa';
import { getAuth } from "firebase/auth";


const GoogleSignInButton = () => {
  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
    }).catch((error) => {
    // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    });
  };

  return (
        <button onClick={handleSignIn} className="bg-white hover:bg-gray-100 border border-gray-300 text-black rounded-full w-full h-10 pl-16 pr-16">
            <span className="absolute inset-y-0 left-0 pl-8 flex items-center">
            <FaGoogle className="text-gray-500" />
            </span>
            Se connecter avec Google
        </button>
  );
};

export default GoogleSignInButton;