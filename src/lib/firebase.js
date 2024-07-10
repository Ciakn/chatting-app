// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatapp-7b9dd.firebaseapp.com",
  projectId: "chatapp-7b9dd",
  storageBucket: "chatapp-7b9dd.appspot.com",
  messagingSenderId: "920738463093",
  appId: "1:920738463093:web:98dbd064368973cbd4673c",
  measurementId: "G-7LYJS8SCH9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
