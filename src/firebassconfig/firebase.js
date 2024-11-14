import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged ,signOut} from "firebase/auth";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3kQT0pzYqRqL9trErZC7C0_TOBaRQdIs",
  authDomain: "nextjs-eb33e.firebaseapp.com",
  projectId: "nextjs-eb33e",
  storageBucket: "nextjs-eb33e.firebasestorage.app",
  messagingSenderId: "692621771790",
  appId: "1:692621771790:web:4ae7662779b58230a1685f",
  measurementId: "G-WKMR9LZNHV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// TODO: Replace the following with your app's Firebase project configuration
// Initialize Firebase



// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export { auth ,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut}