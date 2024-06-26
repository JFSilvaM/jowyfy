import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzTOAgTRJ_5QVcTBhoTj4aGURSji6vcws",
  authDomain: "jowyfy.firebaseapp.com",
  projectId: "jowyfy",
  storageBucket: "jowyfy.appspot.com",
  messagingSenderId: "34797844344",
  appId: "1:34797844344:web:7d33cfc1097982df40ba8d",
};

export const initFirebase = initializeApp(firebaseConfig);

export const db = getFirestore(initFirebase);
