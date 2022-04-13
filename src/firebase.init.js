// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwA0JjV8aTgUAtplQLgauo7oxP_f_FBJY",
    authDomain: "ema-john-simple-21972.firebaseapp.com",
    projectId: "ema-john-simple-21972",
    storageBucket: "ema-john-simple-21972.appspot.com",
    messagingSenderId: "533402198638",
    appId: "1:533402198638:web:4dc58c66809d7647d73c7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;