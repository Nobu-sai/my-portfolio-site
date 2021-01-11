import firebase from 'firebase'; 

// Access to Firebase Project Configs. 
const firebaseDefaultProjectConfig  = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID 
}

// const firebaseCommitmentRecordProjectConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_COMMITMENT_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_COMMITMENT_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_COMMITMENT_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_COMMITMENT_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_COMMITMENT_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_COMMITMENT_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_COMMITMENT_APP_ID 
// }

// Access to Firebase Services.
// // portfolio-site Project
const defaultProject = firebase.initializeApp(firebaseDefaultProjectConfig)
const defaultDB = defaultProject.firestore()
// const defaultAuth = defaultProject.auth();
// const storage = firebase.storage();

export { defaultDB };

// // commitment-record Project
// const commitmentRecordProject = firebase.initializeApp(firebaseCommitmentRecordProjectConfig, "other")
// const commitmentRecordDB = commitmentRecordProject.firestore()
// // const defaultAuth = defaultProject.auth();
// // const storage = firebase.storage();


// // Test the name
// console.log(defaultProject.name)
// console.log(commitmentRecordProject.name)

// Exporting

// export { commitmentRecordDB };