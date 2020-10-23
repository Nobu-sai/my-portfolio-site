import firebase from 'firebase';



const firebaseApp = firebase.initializeApp(
  {
    // CONFIG GOES HERE
    apiKey: "AIzaSyDDMwGF54bjByrjth3iaw2pA6Sbg4VabUI",
    authDomain: "portfolio-site-ad71f.firebaseapp.com",
    databaseURL: "https://portfolio-site-ad71f.firebaseio.com",
    projectId: "portfolio-site-ad71f",
    storageBucket: "portfolio-site-ad71f.appspot.com",
    messagingSenderId: "1066914805547",
    appId: "1:1066914805547:web:8f855bea6d5aae606f776e"
  }
)
const db = firebaseApp.firestore()
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };