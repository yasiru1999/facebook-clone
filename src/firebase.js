import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB9hD0PECqXAJDIng7sblf55pWbwHOSp9Y",
    authDomain: "facebook-clone-aa742.firebaseapp.com",
    projectId: "facebook-clone-aa742",
    storageBucket: "facebook-clone-aa742.appspot.com",
    messagingSenderId: "896962801256",
    appId: "1:896962801256:web:170ee538633550855015dd",
    measurementId: "G-ZG89QTTEL9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth,provider };
  export default db;