// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP_AXVyrkCpimMVp5ILnZwLtltuxQBojk",
  authDomain: "toy-store-fc0c7.firebaseapp.com",
  projectId: "toy-store-fc0c7",
  storageBucket: "toy-store-fc0c7.appspot.com",
  messagingSenderId: "1035418736647",
  appId: "1:1035418736647:web:58493be74db672240272a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;