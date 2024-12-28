// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'job-tracker-5e095.firebaseapp.com', // Directly in the code
  projectId: 'job-tracker-5e095', // Directly in the code
  storageBucket: 'job-tracker-5e095.firebasestorage.app', // Directly in the code
  messagingSenderId: '38501972508', // Directly in the code
  appId: '1:38501972508:web:35fa2134abdeb9a90f7dd9', // Directly in the code
  measurementId: 'G-RR3Y2YDV7M', // Directly in the code
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
