/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY1JESxAdFkLi3lKOpcrVsJQhJ6vbEq6M",
  authDomain: "darwin-2968b.firebaseapp.com",
  projectId: "darwin-2968b",
  storageBucket: "darwin-2968b.appspot.com",
  messagingSenderId: "857906183884",
  appId: "1:857906183884:web:2e8ad204b2920fade2cc69",
  measurementId: "G-4JQTTM2GM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get auth object
const auth = getAuth(app);

export { auth }; // Export auth object
export default app; // Export the entire Firebase app if needed