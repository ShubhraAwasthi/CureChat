// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAd6k2JV0GYs6w3Szg1AGEjwyivZoy0k_M",
  authDomain: "curechat-hackmit.firebaseapp.com",
  projectId: "curechat-hackmit",
  storageBucket: "curechat-hackmit.appspot.com",
  messagingSenderId: "844309966415",
  appId: "1:844309966415:web:08d8552b36c8295ab8443a",
  measurementId: "G-2F4P08GSZ0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider= new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage().ref("images");

export {auth, provider,storage};
export default db;