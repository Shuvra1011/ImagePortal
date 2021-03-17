import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

  // Your web app's Firebase configuration

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDgvTOXU3P1d3fM3AYOXD9-ma6xtvijuzk",
    authDomain: "image-gallery-8f4af.firebaseapp.com",
    projectId: "image-gallery-8f4af",
    storageBucket: "image-gallery-8f4af.appspot.com",
    messagingSenderId: "748402339486",
    appId: "1:748402339486:web:67258c5cb23030717b158f",
    measurementId: "G-ML2QZQM7GX"
}
  // var firebaseConfig = {
  //   apiKey: "AIzaSyDgvTOXU3P1d3fM3AYOXD9-ma6xtvijuzk",
  //   authDomain: "image-gallery-8f4af.firebaseapp.com",
  //   projectId: "image-gallery-8f4af",
  //   storageBucket: "image-gallery-8f4af.appspot.com",
  //   messagingSenderId: "748402339486",
  //   appId: "1:748402339486:web:67258c5cb23030717b158f",
  //   measurementId: "G-ML2QZQM7GX"
  // };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  // const auth = firebase.auth();

  export{projectStorage, projectFirestore, timestamp};
