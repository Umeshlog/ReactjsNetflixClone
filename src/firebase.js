import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCU3MkrKPvaimo2CZau5jfzaAKV__WM1Fk",
  authDomain: "netflix-clone-f13a2.firebaseapp.com",
  projectId: "netflix-clone-f13a2",
  storageBucket: "netflix-clone-f13a2.appspot.com",
  messagingSenderId: "256780137595",
  appId: "1:256780137595:web:502e03d2637716a0205ede",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth=firebase.auth();

export {auth}