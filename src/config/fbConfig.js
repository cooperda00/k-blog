import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyC8v_BE5RfQpfcqUOVkvQu_mkl2cGLbmDo",
  authDomain: "ecobeasts-86bbf.firebaseapp.com",
  databaseURL: "https://ecobeasts-86bbf.firebaseio.com",
  projectId: "ecobeasts-86bbf",
  storageBucket: "ecobeasts-86bbf.appspot.com",
  messagingSenderId: "75221619373"
};
firebase.initializeApp(config);
firebase.firestore();

export default firebase;
