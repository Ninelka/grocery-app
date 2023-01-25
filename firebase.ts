import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import axios from 'axios';

// Initialize Firebase
const firebase = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: `${process.env.REACT_APP_PROJECT_ID}.firebaseapp.com`,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: `${process.env.REACT_APP_PROJECT_ID}.appspot.com`,
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebase);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export async function createUser(email, password) {
  const response = await createUserWithEmailAndPassword(auth, email, password);

  return await response.user.getIdToken();
}

export async function login(email, password) {
  const response = await signInWithEmailAndPassword(auth, email, password);
  return await response.user.getIdToken();
}

export async function logout() {
  await signOut(auth);
}

const dbUrl =
  'https://grocery-app-46fec-default-rtdb.europe-west1.firebasedatabase.app/';

export async function getCategories() {
  return await axios.get(dbUrl + 'categories.json').then((response) => {
    return response.data;
  });
}

export async function getDeals() {
  return await axios.get(dbUrl + 'deals.json').then((response) => {
    return response.data;
  });
}

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
