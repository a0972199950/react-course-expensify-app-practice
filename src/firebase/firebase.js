import * as firebase from "firebase";

// const config = {
//     apiKey: process.env.FIREBASE_API_KEY,
//     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.FIREBASE_DATABASE_URL,
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
// };

const config = {
    apiKey: "AIzaSyBdutgaG_B9eC1ZlgYYxcy5aNW2dR2HLdQ",
    authDomain: "expensify-practice.firebaseapp.com",
    databaseURL: "https://expensify-practice.firebaseio.com",
    projectId: "expensify-practice",
    storageBucket: "expensify-practice.appspot.com",
    messagingSenderId: "574930881559"
};


firebase.initializeApp(config);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

const database = firebase.database();

export { firebase, googleAuthProvider, facebookAuthProvider, database as default };