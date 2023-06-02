// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsq4H1PAUObNC9tCTF2iG1wfIuFJVmRl4",
  authDomain: "rodeotms.firebaseapp.com",
  projectId: "rodeotms",
  storageBucket: "rodeotms.appspot.com",
  messagingSenderId: "325492987616",
  appId: "1:325492987616:web:4ffe5cb5b8dea676f22285"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);