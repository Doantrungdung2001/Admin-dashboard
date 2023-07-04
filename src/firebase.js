// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAEHi43xGPvWORMIOB7iAwPcJi3dShnJHo',
    authDomain: 'chat-app-2c392.firebaseapp.com',
    databaseURL: 'https://chat-app-2c392-default-rtdb.firebaseio.com',
    projectId: 'chat-app-2c392',
    storageBucket: 'chat-app-2c392.appspot.com',
    messagingSenderId: '179398525528',
    appId: '1:179398525528:web:466cf7c627e5b750a5c02d',
    measurementId: 'G-9B61EM42CN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
