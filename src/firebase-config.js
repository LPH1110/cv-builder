import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
    authDomain: 'angelcv-d16a3.firebaseapp.com',
    projectId: 'angelcv-d16a3',
    storageBucket: 'angelcv-d16a3.appspot.com',
    messagingSenderId: '935671646691',
    appId: '1:935671646691:web:702a1508a35ebace9238d6',
    measurementId: 'G-PXZ1W0N4M5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
