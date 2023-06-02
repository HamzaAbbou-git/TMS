import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import '../style/SignIn.css';
import image from '../../images/logoRodeo.png';
import { FiUser, FiLock } from 'react-icons/fi';
import { FaGoogle } from 'react-icons/fa';


const GoogleSignInButton = () => {
  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(provider);
    } catch (error) {
      console.error(error);
    }
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