// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// IMPORTANT - IF YOU'RE DOING YOUR OWN VERSION OF THIS PROJECT,
// SIGN-UP TO FIREBASE ANE REPLACE THESE CREDENTIALS WITH YOUR OWN.
// INFO HERE: https://firebase.google.com/docs/web/setup
const firebaseConfig = {
  apiKey: "AIzaSyCPN7clnC6xk8KmxVkT2-V6glDW1zspA4E",
  authDomain: "textvote-7a52e.firebaseapp.com",
  projectId: "textvote-7a52e",
  storageBucket: "textvote-7a52e.appspot.com",
  messagingSenderId: "20981290333",
  appId: "1:20981290333:web:0188021f524ab9b53844b4",
  measurementId: "G-9L1788Z7S3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db }
