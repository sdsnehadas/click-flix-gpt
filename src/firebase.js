// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCTw3oDvg7YFqogfEtVH008uLuHV3nH0E",
  authDomain: "clickflix-gpt.firebaseapp.com",
  projectId: "clickflix-gpt",
  storageBucket: "clickflix-gpt.appspot.com",
  messagingSenderId: "372561792536",
  appId: "1:372561792536:web:d26f7c9695d7a9e4ddbd6d",
  measurementId: "G-F4V6X8MVK0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
