// frontend/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwP_Ok2MOzbpllIzC56ZJIV-2kIKUg6Ms",
  authDomain: "timesaver-7fbe1.firebaseapp.com",
  projectId: "timesaver-7fbe1",
  storageBucket: "timesaver-7fbe1.appspot.com",
  messagingSenderId: "112094643461",
  appId: "1:112094643461:web:7ebc8b5f493528edf7a36c",
  measurementId: "G-LJX30ZGW3M"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
