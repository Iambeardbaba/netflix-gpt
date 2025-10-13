// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDduaDchSrBfNycLWm0RAfPzYVLqvXX3Zk",
  authDomain: "netflixgpt-educational-demo.firebaseapp.com",
  projectId: "netflixgpt-educational-demo",
  storageBucket: "netflixgpt-educational-demo.firebasestorage.app",
  messagingSenderId: "644585470791",
  appId: "1:644585470791:web:c69855eec231346e196a62",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
