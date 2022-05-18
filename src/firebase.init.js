// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADxm4ANtPX1fEr4BN1102KEdvEXYVdOcY",
  authDomain: "to-do-app-56704.firebaseapp.com",
  projectId: "to-do-app-56704",
  storageBucket: "to-do-app-56704.appspot.com",
  messagingSenderId: "355430132416",
  appId: "1:355430132416:web:70953a4913f55a6b04db25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;