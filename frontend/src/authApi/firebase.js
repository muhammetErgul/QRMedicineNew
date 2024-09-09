
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Firebase konfigürasyon bilgileri
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_ID
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;
