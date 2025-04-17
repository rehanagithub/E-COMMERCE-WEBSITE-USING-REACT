
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';




const firebaseConfig = {
    apiKey: "AIzaSyASEdRP15HLQ-hM5TvQZixp4KrN-iiDss0",
    authDomain: "eshop-15712.firebaseapp.com",
    projectId: "eshop-15712",
    storageBucket: "eshop-15712.firebasestorage.app",
    messagingSenderId: "57404336234",
    appId: "1:57404336234:web:3e83c4d18dcdbc205a4213",
    measurementId: "G-SDF919BJYY"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
  export { auth };