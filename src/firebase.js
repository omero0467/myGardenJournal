// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACPRl6Sx-EhsFx2FAtM5sD9NO0PJh-2Kg",//! replace to process.env.REACT_APP_FIREBASE_KEY
  authDomain: "my-garden-journal-6876c.firebaseapp.com",
  projectId: "my-garden-journal-6876c",
  storageBucket: "my-garden-journal-6876c.appspot.com",
  messagingSenderId: "923768491781",
  appId: "1:923768491781:web:0637d222cea8e1cd56b16c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app