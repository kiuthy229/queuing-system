// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7DEFy5sL3aF_UO3EvdTDbL9XYJfvmB18",
  authDomain: "queuing-system-a3af4.firebaseapp.com",
  projectId: "queuing-system-a3af4",
  storageBucket: "queuing-system-a3af4.appspot.com",
  messagingSenderId: "75844310754",
  appId: "1:75844310754:web:7022c62e01e31f3535f0bb",
  measurementId: "G-6KNL3K61QD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore()