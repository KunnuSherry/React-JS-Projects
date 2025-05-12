import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAUPTJBC-wIcSWnsv_nZmc-EWICOTo08w0",
  authDomain: "react-firebase--auth-d418e.firebaseapp.com",
  projectId: "react-firebase--auth-d418e",
  storageBucket: "react-firebase--auth-d418e.firebasestorage.app",
  messagingSenderId: "204745911552",
  appId: "1:204745911552:web:208cc6886a726248ca97e5",
  measurementId: "G-6R1QZLCH0S"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth