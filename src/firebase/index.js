// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9BPi7TQGxyMjfAHWgSQcX-ykhgxQ_Lqg",
  authDomain: "newprogram-f5eae.firebaseapp.com",
  projectId: "newprogram-f5eae",
  storageBucket: "newprogram-f5eae.appspot.com",
  messagingSenderId: "401529303272",
  appId: "1:401529303272:web:b0b5c0635a099afc7a195d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)