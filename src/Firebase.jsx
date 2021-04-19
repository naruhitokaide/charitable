import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAH5RPxX8khSres-xyK09h1qmaOlc7KOKg",
    authDomain: "charitable-feedback-form.firebaseapp.com",
    projectId: "charitable-feedback-form",
    storageBucket: "charitable-feedback-form.appspot.com",
    messagingSenderId: "53255913376",
    appId: "1:53255913376:web:a3a244cc82f3ebb03ceec5"
  });

var db = firebaseApp.firestore();

export { db };