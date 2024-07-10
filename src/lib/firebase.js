import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhJ0rvsQqocg2LzcjX0CQwXx0pt0HFY4k",
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
export const auth = getAuth(app);
export { app, analytics };
