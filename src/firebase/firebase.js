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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (err) {
      console.log('Error creating user!', err.message);
    }
  }

  return userRef;
}

// firebase.initializeApp(config);

if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app();
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;