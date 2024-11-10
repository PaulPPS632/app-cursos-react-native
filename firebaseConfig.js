// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnzl3PyixO0bGmTWPeJEUPjRSeTFIhKn8",
  authDomain: "codeledge-94e66.firebaseapp.com",
  projectId: "codeledge-94e66",
  storageBucket: "codeledge-94e66.firebasestorage.app",
  messagingSenderId: "483234699642",
  appId: "1:483234699642:web:300a89f06cf0862fbb5ec3",
  measurementId: "G-7VZ6NEFVQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});