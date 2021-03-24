import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAR8QtyWqc_XM36SpTak-KdCBtDy41D3xw",
    authDomain: "crwn-db-cef6a.firebaseapp.com",
    projectId: "crwn-db-cef6a",
    storageBucket: "crwn-db-cef6a.appspot.com",
    messagingSenderId: "492805672334",
    appId: "1:492805672334:web:6d9f58ba8afee3d0f3a8df",
    measurementId: "G-B2VLE0GDQ0"
  };


  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    // console.log(snapShot);

    if (!snapShot.exists) {
      const{ displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user',error.messag);
      }
    }

    return userRef;
  };
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const singInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;