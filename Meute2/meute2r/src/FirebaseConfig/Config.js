import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjkoGVC4vYUbQm159U4ANmZkDKZZHHTr4",
  authDomain: "meute2rats-46390.firebaseapp.com",
  projectId: "meute2rats-46390",
  storageBucket: "meute2rats-46390.appspot.com",
  messagingSenderId: "949930155601",
  appId: "1:949930155601:web:e6272149d6a64e7d82a270",
  measurementId: "G-8ZEQXYB6YM",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
