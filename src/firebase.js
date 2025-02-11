// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBhCjpAlpe0a9n5TzXKlRTULCrFAXAR1g",
  authDomain: "date-with-me-1302.firebaseapp.com",
  projectId: "date-with-me-1302",
  storageBucket: "date-with-me-1302.firebasestorage.app",
  messagingSenderId: "791160677043",
  appId: "1:791160677043:web:99dc809fcc644ea55506c6",
  measurementId: "G-065C0Y4NTB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db };
