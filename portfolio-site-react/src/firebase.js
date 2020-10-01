import firebase from 'firebase';
import * as admin from 'firebase-admin';

const firebaseApp = firebase.initializeApp(  

  // CONFIG GOES HERE
)


// var serviceAccount = require("./portfolio-site-ad71f-firebase-adminsdk-rpnn4-c2e86ff810.json");



const db = firebaseApp.firestore()
const auth = firebase.auth();
const storage = firebase.storage();


export { db, auth, storage };