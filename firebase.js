import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdh1DpdS8nft9JAS5vLnNdbHG1gv3f80A",
  authDomain: "chatgpt-messenger-787d1.firebaseapp.com",
  projectId: "chatgpt-messenger-787d1",
  storageBucket: "chatgpt-messenger-787d1.appspot.com",
  messagingSenderId: "837536238244",
  appId: "1:837536238244:web:4211e189d7f2e3ea1db431",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
