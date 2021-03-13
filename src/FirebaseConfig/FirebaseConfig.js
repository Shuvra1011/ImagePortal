import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDgvTOXU3P1d3fM3AYOXD9-ma6xtvijuzk",
    authDomain: "image-gallery-8f4af.firebaseapp.com",
    projectId: "image-gallery-8f4af",
    storageBucket: "image-gallery-8f4af.appspot.com",
    messagingSenderId: "748402339486",
    appId: "1:748402339486:web:67258c5cb23030717b158f",
    measurementId: "G-ML2QZQM7GX"
  };
  // Initialize Firebase
  const dataStorage = firebase.initializeApp(firebaseConfig);
  const firestore = firebase.analytics();

  export{dataStorage, firestore};
