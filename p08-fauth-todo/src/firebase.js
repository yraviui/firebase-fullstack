// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAW_9JTeApoL1pxNIE84uSxAB05PXRYV_Q",
    authDomain: "p08-fauth-todo.firebaseapp.com",
    projectId: "p08-fauth-todo",
    storageBucket: "p08-fauth-todo.appspot.com",
    messagingSenderId: "462190331499",
    appId: "1:462190331499:web:6d46183b13f0b80dac132e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;