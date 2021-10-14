import firebaseConfig from "./firebase.config";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

// SIGN IN WITH GOOGLE

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const googleSignIn = () => auth.signInWithPopup(provider);

// FIRESTORE

//user
export const createUserProfileDocuments = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = db.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createDate = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createDate,
        ...additionalData,
      });
    } catch (error) {
      console.log("error: " + error);
    }
  }

  return userRef;
};

// store colections
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = db.collection(collectionKey);
  var batch = db.batch();

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

// fetch collections data

export const convertCollectionsSnapShotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    const collectionsData = {
      routeName: title.toLowerCase(),
      id: doc.id,
      title: title,
      items: items,
    };
    return collectionsData;
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export default firebase;
