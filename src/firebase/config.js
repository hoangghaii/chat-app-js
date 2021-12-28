import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCx1R1zB_TPoZQJSGSGFAIxcd8tAy7ir1A',
  authDomain: 'chat-app-2574a.firebaseapp.com',
  projectId: 'chat-app-2574a',
  storageBucket: 'chat-app-2574a.appspot.com',
  messagingSenderId: '153230552376',
  appId: '1:153230552376:web:7151900652aa37379525cd',
  measurementId: 'G-MS66NW89QN',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === 'localhost') {
  auth.useEmulator('http://localhost:9099');
  db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;
