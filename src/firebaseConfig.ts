import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZawjbBB3VE_9P7caesfklQzaNTk04g_g",
  authDomain: "nhlanhlayethu-secondary.firebaseapp.com",
  projectId: "nhlanhlayethu-secondary",
  storageBucket: "nhlanhlayethu-secondary.firebasestorage.app",
  messagingSenderId: "118640946867",
  appId: "1:118640946867:web:e4b3ea3ad2583f50d20ac6",
  measurementId: "G-S0SMEECR1K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
