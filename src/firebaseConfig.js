import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtH_6gAaSUWgj0nmzDfVyuj0IK0EUehLs",
  authDomain: "iboost-demo-b8631.firebaseapp.com",
  projectId: "iboost-demo-b8631",
  storageBucket: "iboost-demo-b8631.appspot.com",
  messagingSenderId: "265762802582",
  appId: "1:265762802582:web:a9c69425a8ac81daeeebb7",
  measurementId: "G-M1PS090ZDJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
