// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-gGjYrmfH1vacywpmmIvHVix5lesjEDQ",
  authDomain: "enojada-mobile-app---tracker.firebaseapp.com",
  projectId: "enojada-mobile-app---tracker",
  storageBucket: "enojada-mobile-app---tracker.firebasestorage.app",
  messagingSenderId: "62152825818",
  appId: "1:62152825818:web:0cf34f19a0ee745105bee3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);