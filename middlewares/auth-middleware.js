import firebaseConfig from '../config';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

// Initialize Firebase
const fb = initializeApp(firebaseConfig.firebaseConfig);
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(`${uid} just logged in`);
  } else {
    console.log("User just logged out");
  }
});
export const sign_Out = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}
export const signIn = (req, res, next) => {
  let { email, password } = req.body;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(`${userCredential} just logged in`);
      res.send(userCredential);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`Error code: ${errorCode}`);
      console.log(`Error message: ${errorMessage}`);
      res.send({errorCode: errorCode, errorMessage: errorMessage});
    });
  };
  
  export const signUp = (req, res, next) => {
    let { email, password } = req.body;
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(`${userCredential} just logged in`);
      res.send(userCredential);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`Error code: ${errorCode}`);
      console.log(`Error message: ${errorMessage}`);
      res.send({errorCode: errorCode, errorMessage: errorMessage});
    });
}