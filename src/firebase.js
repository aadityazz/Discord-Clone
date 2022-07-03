import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC5zD_X0kOS_wHIYc6MEmUkdUnnVBltVIc",
  authDomain: "discord-648ab.firebaseapp.com",
  projectId: "discord-648ab",
  storageBucket: "discord-648ab.appspot.com",
  messagingSenderId: "910054019378",
  appId: "1:910054019378:web:17740ec606518d5da1872b",
  measurementId: "G-V3LM90CRRD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
