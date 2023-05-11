import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

firebase.initializeApp({
  apiKey:`${process.env.REACT_APP_FIREBASE_KEY}`,
  authDomain:process.env.REACT_APP_authDomain,
  databaseURL:process.env.REACT_APP_databaseURL,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId
});

export const auth = firebase.auth();

