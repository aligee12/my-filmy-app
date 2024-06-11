// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import { Firestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8saAIvCyPTaTWbxHc-61q1BKFFCMZ0zg",
  authDomain: "filmy-geek-616b3.firebaseapp.com",
  databaseURL: "https://filmy-geek-616b3-default-rtdb.firebaseio.com",
  projectId: "filmy-geek-616b3",
  storageBucket: "filmy-geek-616b3.appspot.com",
  messagingSenderId: "522713248225",
  appId: "1:522713248225:web:100cb9beb57bf669bf62a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
// const db = 
// const storageRef = ref(storage);
export {app,auth,storage};