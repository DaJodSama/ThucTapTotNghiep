// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcN-0mDHQHuhJaKTZkUgPeoSdidblLhZ8",
  authDomain: "shop-1fbb4.firebaseapp.com",
  projectId: "shop-1fbb4",
  storageBucket: "shop-1fbb4.appspot.com",
  messagingSenderId: "146899093071",
  appId: "1:146899093071:web:be6eeaf58196cf8ed64c3a",
  measurementId: "G-5FX9HF4LBB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export default app;