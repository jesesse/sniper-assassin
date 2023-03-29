import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGJVPNwBGC5I60LtjWz2os4YBbhHhj4ok",
  authDomain: "sinper-assassin.firebaseapp.com",
  projectId: "sinper-assassin",
  storageBucket: "sinper-assassin.appspot.com",
  messagingSenderId: "688893629740",
  appId: "1:688893629740:web:c93f7c92d83cb9fac8c889"
};

export const firebaseApp = initializeApp(firebaseConfig); 
const db = getFirestore(firebaseApp)