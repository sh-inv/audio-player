import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBULFU8lFalXZc4EJvIq23gWrM2_YL5pw0",
  authDomain: "record-a5032.firebaseapp.com",
  projectId: "record-a5032",
  storageBucket: "record-a5032.appspot.com",
  messagingSenderId: "533115981697",
  appId: "1:533115981697:web:0f9e34bcd6464a43f4e280",
  measurementId: "G-8THV7D3T3K"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;