import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDpx4_7c08SVrIGF3_gQPDaVeNz5iUsOQc",
  authDomain: "robinhood-clone-fa792.firebaseapp.com",
  projectId: "robinhood-clone-fa792",
  storageBucket: "robinhood-clone-fa792.appspot.com",
  messagingSenderId: "816277354620",
  appId: "1:816277354620:web:f25bd830fe533892af71f9",
  measurementId: "G-143E9GVTJ3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
