import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import '../style/SignIn.css';
import image from '../../images/logoRodeo.png';
import { FiUser, FiLock, FiPhone, FiMail } from 'react-icons/fi';
import { FaGoogle } from 'react-icons/fa';
import GoogleSignUpButton from "./GoogleSignUpButton";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-4/6 min-h-screen">
        <img className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/6169002/pexels-photo-6169002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
      </div>
      <div className=" w-2/6 flex flex-col items-center pt-40 h-screen bg-white">
        <img
            src={image}
            alt="Your Image"
            className="h-50 w-80"
        />
        <h1 className="text-4xl mt-20">Bienvenue</h1>
        <form onSubmit={signUp}  className="mt-12 flex flex-col items-center">
            <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <FiUser className="text-gray-500" />
                </span>
                <input 
                    className="w-80 pl-10 pr-4 py-2 rounded border border-gray-400"
                    type="email"
                    placeholder="Entrez votre Nom"
                    >
                </input>
            </div>
            <div className="relative mt-5">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <FiUser className="text-gray-500" />
                </span>
                <input 
                    className="w-80 pl-10 pr-4 py-2 rounded border border-gray-400"
                    type="email"
                    placeholder="Entrez votre prénom"
                    >
                </input>
            </div>
            <div className="relative mt-5">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <FiPhone className="text-gray-500" />
                </span>
                <input 
                    className="w-80 pl-10 pr-4 py-2 rounded border border-gray-400"
                    type="email"
                    placeholder="Entrez votre téléphone"
                    >
                </input>
            </div>
            <div className="relative mt-5">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <FiMail className="text-gray-500" />
                </span>
                <input 
                    className="w-80 pl-10 pr-4 py-2 rounded border border-gray-400"
                    type="email"
                    placeholder="Entrez votre email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}>
                </input>
            </div>
            <div className="relative mt-5">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <FiLock className="text-gray-500" />
                </span>
                <input 
                    className="w-80 pl-10 pr-4 py-2 rounded border border-gray-400"
                    type="password"
                    placeholder="Entrez votre mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>
                </input>
            </div>
            <div className="flex min-w-full justify-end">
                <a
                    href="/forgot-password"
                    className="text-blue-500 hover:text-blue-700 underline mt-1"
                >
                    mot de passe oublié ?
                </a>
            </div>
            <button 
                type="submit"
                className="bg-indigo-700 text-white rounded-full w-full mt-8 h-10"
                onClick={() => {window.location.href = '/signin'}}
                >
                S'inscrire
            </button>
            <div className="my-5 flex items-center ">
                <p className="text-center font-semibold text-slate-500">Ou</p>
            </div>
            <GoogleSignUpButton />
        </form>
      </div>
    </div>
  );
};

export default SignUp;