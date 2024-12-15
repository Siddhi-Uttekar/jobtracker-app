// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm0RWNvbzsbC4medn4xHa5c1rcZi011Xg",
  authDomain: "job-tracker-5e095.firebaseapp.com",
  projectId: "job-tracker-5e095",
  storageBucket: "job-tracker-5e095.firebasestorage.app",
  messagingSenderId: "38501972508",
  appId: "1:38501972508:web:35fa2134abdeb9a90f7dd9",
  measurementId: "G-RR3Y2YDV7M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);;