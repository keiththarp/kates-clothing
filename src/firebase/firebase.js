import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDfU1X4YFocWCvvXm8CXMRWXGf_pErY8XQ",
  authDomain: "kates-clothes.firebaseapp.com",
  projectId: "kates-clothes",
  storageBucket: "kates-clothes.appspot.com",
  messagingSenderId: "550081726266",
  appId: "1:550081726266:web:d1a062592414a196b1f203"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;