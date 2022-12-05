// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDNTKUzHRXz3mg8e2J5ws2izA0Rwr0Ve8",
  authDomain: "uber-eats-saif.firebaseapp.com",
  projectId: "uber-eats-saif",
  storageBucket: "uber-eats-saif.appspot.com",
  messagingSenderId: "1094572213601",
  appId: "1:1094572213601:web:ddb4083c66964392e1b120",
  measurementId: "G-M4PT2BKFR3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
