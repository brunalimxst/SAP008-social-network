import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
} from './exports.js'; // eslint-disable-line import/no-unresolved

import { app } from './config.js';

const provider = new GoogleAuthProvider(app);
const auth = getAuth(app);

export function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function loginGoogle() {
  return signInWithPopup(auth, provider);
}

export async function newUser(email, password, name) {
  return createUserWithEmailAndPassword(auth, email, password, name)
    .then(() => updateProfile(auth.currentUser, {
      displayName: name,
    }));
}

export async function logout() {
  return signOut(auth);
}

export function getUser() {
  return auth.currentUser;
}
