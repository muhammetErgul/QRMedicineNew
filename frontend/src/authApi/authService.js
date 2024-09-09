/* eslint-disable no-useless-catch */
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

// Kullanıcı kayıt fonksiyonu
export const register = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

// Kullanıcı giriş fonksiyonu
export const signin = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

// Kullanıcı çıkış fonksiyonu
export const signout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};

// Kullanıcı durumunu takip etme fonksiyonu
export const onAuthStateChangedListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};
