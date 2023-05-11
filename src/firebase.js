import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

firebase.initializeApp({
  apiKey: "AIzaSyDK_V4Evg24XTHSRy2_HuAOQ-gabgQA3Ag",
  authDomain: "netflix-85f45.firebaseapp.com",
  databaseURL: "https://netflix-85f45-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "netflix-85f45",
  storageBucket: "netflix-85f45.appspot.com",
  messagingSenderId: "281858155231",
  appId: "1:281858155231:web:e43d548c71f62585047f6a"
});

export const auth = firebase.auth();

