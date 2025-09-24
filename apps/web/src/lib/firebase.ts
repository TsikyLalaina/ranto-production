import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCwm3rgIrBFzO0dlngeAgrMNJqmNjdcfDM",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "miharina-hub-production.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "miharina-hub-production",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "miharina-hub-production.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:123456789:web:abc123"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Note: Removed emulator connection to use production Firebase
// If you want to use Firebase emulator, uncomment and run:
// firebase emulators:start --only auth
// if (import.meta.env.DEV) {
//   try {
//     connectAuthEmulator(auth, "http://localhost:9099");
//   } catch (error) {
//     // Ignore if already connected
//   }
// }

export { auth };
export default app;