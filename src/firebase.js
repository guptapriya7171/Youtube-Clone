
import firebase from 'firebase/app';
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDLA537ULmzLoQcTVctZf5cbN-k0g8tNT0",
  authDomain: "ytclone-241.firebaseapp.com",
  projectId: "ytclone-241",
  storageBucket: "ytclone-241.appspot.com",
  messagingSenderId: "122798741808",
  appId: "1:122798741808:web:d43f40aa1d7049fb7450f5"
};

  firebase.initializeApp(firebaseConfig)
  export default firebase.auth()

  