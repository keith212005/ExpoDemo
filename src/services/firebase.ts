import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAy3l0oZu2GNzDWJkmx7qXg8dt30LmS5MA",
  authDomain: "expodemo-15bb9.firebaseapp.com",
  projectId: "expodemo-15bb9",
  storageBucket: "expodemo-15bb9.appspot.com",
  messagingSenderId: "885682559537",
  appId: "1:885682559537:web:b10081e940f6900b07d310",
  measurementId: "G-N9PCQ1RJ51",
};

// Initialize Firebase
let app: any;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

export const auth = getAuth(app);
