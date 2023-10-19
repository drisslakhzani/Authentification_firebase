// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6WDvqwzEJyLKCtUfdqKU1AbazDiS6EUE",
  authDomain: "basics-fire-base.firebaseapp.com",
  projectId: "basics-fire-base",
  storageBucket: "basics-fire-base.appspot.com",
  messagingSenderId: "29340627797",
  appId: "1:29340627797:web:a7a96351d259aa4789f5dc",
  measurementId: "G-HYFQD951JD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app); 