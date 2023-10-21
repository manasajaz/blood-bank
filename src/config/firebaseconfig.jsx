// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtSxhug7fK6r6EDlQcTQAl3ekuFenosJs",
  authDomain: "loginsignup-36898.firebaseapp.com",
  databaseURL: "https://loginsignup-36898-default-rtdb.firebaseio.com",
  projectId: "loginsignup-36898",
  storageBucket: "loginsignup-36898.appspot.com",
  messagingSenderId: "687297400874",
  appId: "1:687297400874:web:03600f42ba7a94ed727353",
  measurementId: "G-HJ1PR8JHGY",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
