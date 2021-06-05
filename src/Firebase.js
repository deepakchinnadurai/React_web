import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDT4FvsyuxhQ3i2iXyMeYNFiWk6cDywa3w",
    authDomain: "react-contact-form-cb2f2.firebaseapp.com",
    projectId: "react-contact-form-cb2f2",
    storageBucket: "react-contact-form-cb2f2.appspot.com",
    messagingSenderId: "417320921334",
    appId: "1:417320921334:web:25dc66769e609e322d64d7",
    measurementId: "G-VZD3CDQHV5"
  });
  // Initialize Firebase

  
  var db = firebaseApp.firestore();
  export {db} ;