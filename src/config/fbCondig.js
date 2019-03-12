import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyD-nKdjZX7lMMS9Ze1lZE7yP5lxlG06YxM",
  authDomain: "redux-db.firebaseapp.com",
  databaseURL: "https://redux-db.firebaseio.com",
  projectId: "redux-db",
  storageBucket: "redux-db.appspot.com",
  messagingSenderId: "332527406406"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase
