import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiyoL5F6Ug2VBNgFOOmO1GdAR14O42L9c",
  authDomain: "nexthire-5753f.firebaseapp.com",
  projectId: "nexthire-5753f",
  storageBucket: "nexthire-5753f.firebasestorage.app",
  messagingSenderId: "849357443601",
  appId: "1:849357443601:web:e557e8b48340ff498c57b0",
  measurementId: "G-BWFGYEZ8VX",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
