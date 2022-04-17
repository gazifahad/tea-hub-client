// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs81ggzlK-MsKPEJJk8uTJ9mm5RCVNdec",
  authDomain: "fi-assignment1.firebaseapp.com",
  projectId: "fi-assignment1",
  storageBucket: "fi-assignment1.appspot.com",
  messagingSenderId: "77833808933",
  appId: "1:77833808933:web:add9223748f895bb28a3cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;