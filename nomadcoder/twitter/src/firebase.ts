// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYnOJ5QEaxtNGVs2x1FAzPzhhz9hHDObg",
  authDomain: "ntwitter-b6537.firebaseapp.com",
  projectId: "ntwitter-b6537",
  storageBucket: "ntwitter-b6537.appspot.com",
  messagingSenderId: "892067274256",
  appId: "1:892067274256:web:5dffa077fbb1782d47b495"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);