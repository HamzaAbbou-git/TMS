import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import '../style/SignIn.css';
import image from '../../images/logoRodeo.png';
import { FiUser, FiLock } from 'react-icons/fi';
import { FaGoogle } from 'react-icons/fa';
import GoogleSignInButton from "./GoogleSignInButton";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
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
        <form onSubmit={signIn}  className="mt-12 flex flex-col items-center">
            <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <FiUser className="text-gray-500" />
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
                className="bg-indigo-700 text-white rounded-full w-full mt-8 h-10">
                Se connecter
            </button>
            <div className="my-5 flex items-center ">
                <p className="text-center font-semibold text-slate-500">Ou</p>
            </div>
            <GoogleSignInButton />
            <div className="my-5 flex items-center ">
                <p className="text-center text-sm text-slate-500">Vous n'avez pas un compte ?</p>
            </div>
            <button 
                type="submit"
                className="bg-white border hover:bg-gray-100 border-gray-400 text-indigo-700 rounded-full w-full h-10"
                onClick={() => {window.location.href = '/signup'}}
                >
                S'inscrire
            </button>
        </form>
      </div>
    </div>
    /*<section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/2">
        <img
          src="https://images.pexels.com/photos/6169002/pexels-photo-6169002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Sample image" />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left">
          <label className="mr-1">Sign in</label>
        </div>
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" placeholder="Email Address" />
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password" />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4" href="#">Forgot Password?</a>
        </div>
        <div className="text-center md:text-left">
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Login</button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don't have an account? <a className="text-red-600 hover:underline hover:underline-offset-4" href="#">Register</a>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Or</p>
        </div>
      </div>
    </section>*/
  );
};

export default SignIn;