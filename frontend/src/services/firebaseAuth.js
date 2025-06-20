import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

export const signup = async (email, password) => {
    try {
      
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created:", userCredential.user);
    } catch (error) {
      console.error("Signup error:", error.message);
    }
  };

 export const login = async (email, password) => {
    try {
        console.log('Hi');
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in:", userCredential.user);
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  export const logout = async () => {
    await signOut(auth);
    console.log("User signed out");
  };


  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User is signed in:", user.email);
    } else {
      console.log("No user is signed in");
    }
  });