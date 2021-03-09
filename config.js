import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDBJgrUW3A-zPQg9KOaJhtdZA3fDqyDzF0",
  authDomain: "wily-app-b7ada.firebaseapp.com",
  projectId: "wily-app-b7ada",
  storageBucket: "wily-app-b7ada.appspot.com",
  messagingSenderId: "364724708908",
  appId: "1:364724708908:web:2d56545bafac6a31d7d389",
  measurementId: "G-V3NZL8G5RE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
