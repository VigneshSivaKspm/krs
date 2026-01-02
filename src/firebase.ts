import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getFirestore, doc, setDoc, collection, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export async function signupWithEmail(email: string, password: string, profile: { displayName?: string } | null = null) {
  const userCred = await createUserWithEmailAndPassword(auth, email, password);
  if (profile?.displayName) {
    await updateProfile(userCred.user, { displayName: profile.displayName });
  }
  return userCred.user;
}

export async function loginWithEmail(email: string, password: string) {
  const userCred = await signInWithEmailAndPassword(auth, email, password);
  return userCred.user;
}

export async function saveUserDetails(uid: string, data: Record<string, any>) {
  const userRef = doc(db, "users", uid);
  await setDoc(userRef, { ...data, uid, updatedAt: serverTimestamp() }, { merge: true });
}

export async function addReport(ward: number, data: Record<string, any>) {
  const col = collection(db, `reports-ward-${ward}`);
  const docRef = await addDoc(col, { ...data, createdAt: serverTimestamp() });
  return docRef.id;
}

export default app;
