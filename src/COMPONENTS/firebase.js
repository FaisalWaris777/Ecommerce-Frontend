// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCug0VJ51mYyKNI4lQwjIWWRIVcc1LcTGI",
  authDomain: "otp-verify-2652b.firebaseapp.com",
  projectId: "otp-verify-2652b",
  storageBucket: "otp-verify-2652b.appspot.com",
  messagingSenderId: "814548515250",
  appId: "1:814548515250:web:8236e6a993d278d99dccab",
  measurementId: "G-JCP15JWTD9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication=getAuth(app);