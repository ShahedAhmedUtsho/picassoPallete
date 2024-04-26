// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN, 
  projectId: "assignment-10-6777f",
  storageBucket: "assignment-10-6777f.appspot.com",
  messagingSenderId: import.meta.env.VITE_MESSEAGINGSENDERID, 
  appId: "1:1067837341473:web:9522acc64d32d295f20860"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);


const Auth = getAuth(app) ;
export default Auth


