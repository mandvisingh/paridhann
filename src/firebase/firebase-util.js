import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDtBNxck0yv2BSvb0DTDnklV3dfLIp8syo",
    authDomain: "paridhann-db.firebaseapp.com",
    projectId: "paridhann-db",
    storageBucket: "paridhann-db.appspot.com",
    messagingSenderId: "964349037427",
    appId: "1:964349037427:web:b4dcfabdfa5a1529d81306",
    measurementId: "G-LQ952QJ78D"
  };

firebase.initializeApp(config);

export const auth= firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;