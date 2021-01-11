import firebase from 'firebase'; 

const firebaseCommitmentRecordProjectConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_COMMITMENT_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_COMMITMENT_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_COMMITMENT_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_COMMITMENT_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_COMMITMENT_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_COMMITMENT_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_COMMITMENT_APP_ID 
}

const commitmentRecordProject = firebase.initializeApp(firebaseCommitmentRecordProjectConfig, "other")
const commitmentRecordDB = commitmentRecordProject.firestore()
// const defaultAuth = defaultProject.auth();
// const storage = firebase.storage();

// Exporting
export { commitmentRecordDB };
