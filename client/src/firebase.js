// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-349a4.firebaseapp.com",
  projectId: "mern-auth-349a4",
  storageBucket: "mern-auth-349a4.appspot.com",
  messagingSenderId: "907440654712",
  appId: "1:907440654712:web:b0fe858c0a881f5f3e208d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);