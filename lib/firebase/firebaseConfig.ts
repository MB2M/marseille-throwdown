// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBdr0S0kI8iQSUTxmcrTVIh2WSByX8cqNc",
    authDomain: "mt22-573c0.firebaseapp.com",
    databaseURL:
        "https://mt22-573c0-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mt22-573c0",
    storageBucket: "mt22-573c0.appspot.com",
    messagingSenderId: "121121154922",
    appId: "1:121121154922:web:b6d79f058b8f0e9acba713",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const db = getDatabase(app);
export const db = getFirestore(app);
