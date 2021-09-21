// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9ohPcHq7OpYidt837hBW5XQkPguwGjNY",
  authDomain: "place-api-281010.firebaseapp.com",
  projectId: "place-api-281010",
  storageBucket: "place-api-281010.appspot.com",
  messagingSenderId: "257775134552",
  appId: "1:257775134552:web:6462a5706c0a4e5640a72d"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const messaging = getMessaging();
