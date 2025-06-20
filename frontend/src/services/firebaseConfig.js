// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration (from Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyCOmOadqb6H-E3UX0noqokKTiU3zMnyyBk",
  authDomain: "book-reviewer-auth.firebaseapp.com",
  projectId: "book-reviewer-auth",
  storageBucket: "book-reviewer-auth.firebasestorage.app",
  messagingSenderId: "520716765253",
  appId: "1:520716765253:web:8d977d4a7be0e8af4cfb2c",
  measurementId: "G-YMWMJQTEFJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
