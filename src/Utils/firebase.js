// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG9n_ZBhoAkamrWcmbA6cBCaVWuuSLTzo",
  authDomain: "netflixgpt-a0e66.firebaseapp.com",
  projectId: "netflixgpt-a0e66",
  storageBucket: "netflixgpt-a0e66.firebasestorage.app",
  messagingSenderId: "23869413529",
  appId: "1:23869413529:web:7fa27816ef26339d928008",
  measurementId: "G-FH27VC9B7D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
