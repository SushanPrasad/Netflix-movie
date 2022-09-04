import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBsp1fLUQ9gG-OnEmIPpAa7ZqUQMcfbzhU",
    authDomain: "netflix-2710.firebaseapp.com",
    projectId: "netflix-2710",
    storageBucket: "netflix-2710.appspot.com",
    messagingSenderId: "646747802226",
    appId: "1:646747802226:web:097d3148cee664aad790eb",
    measurementId: "G-QSQXK3M487"
  };
  


const firebaseApp = firebase.initializeApp (firebaseConfig);
console.log('firebase;;;;',firebaseApp)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};

export default db;
