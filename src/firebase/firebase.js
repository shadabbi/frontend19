import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAA-fejVFohBXBU0k9oiFUUKeP02ZhOggQ",
  authDomain: "frontendtest-2b235.firebaseapp.com",
  projectId: "frontendtest-2b235",
  storageBucket: "frontendtest-2b235.appspot.com",
  messagingSenderId: "327523207360",
  appId: "1:327523207360:web:a2e3a2583fe7a6e6c40525",
  measurementId: "G-Y8P3L4FNEG",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

export default db;
