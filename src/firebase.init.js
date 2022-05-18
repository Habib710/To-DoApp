// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth" ;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxJ9k0YDIYU7jR6CwYbTcnD3yeGMSjPXk",
  authDomain: "to-doapp-59fff.firebaseapp.com",
  projectId: "to-doapp-59fff",
  storageBucket: "to-doapp-59fff.appspot.com",
  messagingSenderId: "391242122925",
  appId: "1:391242122925:web:a4f244974d2c7c948de824"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;