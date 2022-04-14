// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzJGvx8CNb9jLWWT2OASgMWzzFU9KAumI",
    authDomain: "genius-car-services-cdbc3.firebaseapp.com",
    projectId: "genius-car-services-cdbc3",
    storageBucket: "genius-car-services-cdbc3.appspot.com",
    messagingSenderId: "138226040009",
    appId: "1:138226040009:web:72e043ed7a56ad6ff42118"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;