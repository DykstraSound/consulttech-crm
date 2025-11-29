import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDN3LRGcUoP3A1-yzec_chOOQR8_wun5D4",
  authDomain: "consulttech-crm-site.firebaseapp.com",
  projectId: "consulttech-crm-site",
  storageBucket: "consulttech-crm-site.firebasestorage.app",
  messagingSenderId: "583120736554",
  appId: "1:583120736554:web:8464b860abf60a72324e53",
  measurementId: "G-V4XQBX77M1",
};

// init firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
// init services
export const db = getFirestore();
export const postsRef = collection(db, "posts");
