import firebase from 'firebase'

const firebaseConfig = {
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyAdX5KZGhb80pZy1ecnlohqW7RwCDnHJZA",
    authDomain: "clone-3dda6.firebaseapp.com",
    projectId: "clone-3dda6",
    storageBucket: "clone-3dda6.appspot.com",
    messagingSenderId: "740568922669",
    appId: "1:740568922669:web:1e042166fc5568d06516a4",
    measurementId: "G-C59883XCJS"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };