import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { GetFirestore } from "firebase-firestore";

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.nextTick.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = GetFirestore(app);
const provider = new GoogleAuthProvider();
export { auth, db, provider };
