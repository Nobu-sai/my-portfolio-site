import firebase from 'firebase';
import * as admin from 'firebase-admin';


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

const serviceAccount = require('./portfolio-site-ad71f-firebase-adminsdk-rpnn4-95bfee1215.json');

let uid = 'nobu';
let token;


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://portfolio-site-ad71f.firebaseio.com',
});

admin.auth().createCustomToken(uid)
  .then(function(customToken) {
    // Send token back to client
    // console.log(customToken)
    token = customToken;
    
  })
  .catch(function(error) {
    console.log('Error creating custom token:', error);
  });


  firebase.auth().signInWithCustomToken(token)
  .then(res => {
      console.log(res.user.uid);
      res.user.updateEmail("snz0901@gmail.com"); 
  })
  .catch(e => {
      console.log(e);
  })

const db = firebaseApp.firestore()
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };