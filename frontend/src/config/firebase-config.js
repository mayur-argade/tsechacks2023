// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBb9mB9Upvasrx8caDS8nphPPHi_luA4sk",
  authDomain: "roommates-955ee.firebaseapp.com",
  projectId: "roommates-955ee",
  storageBucket: "roommates-955ee.appspot.com",
  messagingSenderId: "943465720567",
  appId: "1:943465720567:web:679a3bd6c79c86b109c1f2",
  measurementId: "G-WTLHZZCQEH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);