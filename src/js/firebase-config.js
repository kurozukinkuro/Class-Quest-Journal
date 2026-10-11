// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAnalytics, isSupported } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  updateProfile
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0OTmnsc1M-53apz8ZDLGwYje9nhsKL9w",
  authDomain: "class-quest-journal.firebaseapp.com",
  projectId: "class-quest-journal",
  storageBucket: "class-quest-journal.firebasestorage.app",
  messagingSenderId: "82365875566",
  appId: "1:82365875566:web:f6129d7cf9961ae8b52d7f",
  measurementId: "G-QPSZ53WV4C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Safely initialize Analytics if supported
isSupported().then(supported => {
  if (supported) {
    window.firebaseAnalytics = getAnalytics(app);
  }
}).catch(e => console.warn('Firebase Analytics not supported in current environment:', e));

const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// Bind to window to allow interaction with traditional script block functions
window.firebaseApp = app;
window.firebaseAuth = auth;
window.firebaseDb = db;
window.doc = doc;
window.getDoc = getDoc;
window.setDoc = setDoc;
window.onSnapshot = onSnapshot;
window.collection = collection;
window.query = query;
window.where = where;
window.getDocs = getDocs;

window.fbSignInWithEmail = (email, pass) => signInWithEmailAndPassword(auth, email, pass);
window.fbSignUpWithEmail = (email, pass) => createUserWithEmailAndPassword(auth, email, pass);
window.fbSignInWithGoogle = () => signInWithPopup(auth, googleProvider);
window.fbSignOut = () => signOut(auth);
window.fbUpdateProfile = (user, profile) => updateProfile(user, profile);

// Auth State Observer
onAuthStateChanged(auth, (user) => {
  if (window.handleFirebaseAuthStateChanged) {
    window.handleFirebaseAuthStateChanged(user);
  }
});
