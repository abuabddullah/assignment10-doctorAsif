// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrTvoAyzK4qEW2gIteaizH6ydMOBHw7So",
  authDomain: "myassignment-10.firebaseapp.com",
  projectId: "myassignment-10",
  storageBucket: "myassignment-10.appspot.com",
  messagingSenderId: "885407488381",
  appId: "1:885407488381:web:324891f15d0965bcf49414"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;