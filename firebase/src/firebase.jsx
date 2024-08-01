// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyD5kGzAAYavR-gNXAHFt0MmdawtjXlbd-A",
  authDomain: "coin-cap-b494e.firebaseapp.com",
  databaseURL: "https://coin-cap-b494e-default-rtdb.firebaseio.com",
  projectId: "coin-cap-b494e",
  storageBucket: "coin-cap-b494e.appspot.com",
  messagingSenderId: "1052149946345",
  appId: "1:1052149946345:web:f825bb286b9f1b039cdd78",
  measurementId: "G-MFJ7KZ6S3D"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const database = getDatabase(app);

export { firestore, auth, database };
