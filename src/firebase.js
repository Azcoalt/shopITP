// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1g6NpZYIn6glCA_XvMvZM0Ov9HbqgcK0",
  authDomain: "page-conferences-shop.firebaseapp.com",
  projectId: "page-conferences-shop",
  storageBucket: "page-conferences-shop.appspot.com",
  messagingSenderId: "29181499277",
  appId: "1:29181499277:web:15ecce24e0f8ca6ef38fc4",
  databaseURL:"https://page-conferences-shop-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);