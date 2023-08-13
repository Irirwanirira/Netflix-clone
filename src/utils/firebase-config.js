import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAzNeIJYiqaZUDno0307CzO2dCXEIWUNHU",
    authDomain: "netflix-project-f1778.firebaseapp.com",
    projectId: "netflix-project-f1778",
    storageBucket: "netflix-project-f1778.appspot.com",
    messagingSenderId: "994608696460",
    appId: "1:994608696460:web:136bd4b8740c5b24eebfa9",
    measurementId: "G-52LMQXN1T7"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)
