// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcN-0mDHQHuhJaKTZkUgPeoSdidblLhZ8",
  authDomain: "shop-1fbb4.firebaseapp.com",
  projectId: "shop-1fbb4",
  storageBucket: "shop-1fbb4.appspot.com",
  messagingSenderId: "146899093071",
  appId: "1:146899093071:web:be6eeaf58196cf8ed64c3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;