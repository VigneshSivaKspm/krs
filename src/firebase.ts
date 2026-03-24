import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  addDoc,
  serverTimestamp,
  getDoc,
  updateDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

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

export async function signupWithEmail(
  email: string,
  password: string,
  profile: { displayName?: string } | null = null,
) {
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
  const userRef = doc(db, "people", uid);
  await setDoc(
    userRef,
    { ...data, uid, updatedAt: serverTimestamp() },
    { merge: true },
  );
}

export async function getUserDetails(uid: string) {
  const userRef = doc(db, "people", uid);
  const snap = await getDoc(userRef);
  if (!snap.exists()) return null;
  return snap.data();
}

export async function addReport(ward: number, data: Record<string, any>) {
  const col = collection(db, `reports-ward-${ward}`);
  const docRef = await addDoc(col, { ...data, createdAt: serverTimestamp() });
  return docRef.id;
}

// Ward names mapping
const WARD_NAMES: Record<number, string> = {
  1: "One", 2: "Two", 3: "Three", 4: "Four", 5: "Five",
  6: "Six", 7: "Seven", 8: "Eight", 9: "Nine", 10: "Ten",
  11: "Eleven", 12: "Twelve", 13: "Thirteen", 14: "Fourteen", 15: "Fifteen",
};

/**
 * Creates a ward member account (Auth + people doc) and assigns them to a ward.
 * Writes all required fields to the wards collection document.
 */
export async function createWardMemberAccount(
  email: string,
  password: string,
  memberName: string,
  wardNumber: number,
  wardDocId: string,
  extraDetails: Record<string, any> = {},
) {
  // 1. Create Firebase Auth account
  const userCred = await createUserWithEmailAndPassword(auth, email, password);
  const uid = userCred.user.uid;
  await updateProfile(userCred.user, { displayName: memberName });

  // 2. Save member details to `people` collection
  await setDoc(
    doc(db, "people", uid),
    {
      uid,
      name: memberName,
      email,
      ward: wardNumber,
      role: "ward_member",
      ...extraDetails,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  );

  // 3. Also write to `users` collection (mirrors people for admin queries)
  await setDoc(
    doc(db, "users", uid),
    {
      uid,
      name: memberName,
      email,
      ward: wardNumber,
      role: "ward_member",
      ...extraDetails,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  );

  // 4. Update the ward document with all required fields
  await assignMemberToWard(wardDocId, uid, memberName, wardNumber);

  return uid;
}

/**
 * Assigns an existing user as the ward member for a given ward document.
 * Sets all required wards fields: assignedMemberId, assignedMemberName,
 * createdAt, pendingIssues, resolvedIssues, totalIssues, wardName, wardNumber.
 */
export async function assignMemberToWard(
  wardDocId: string,
  memberId: string,
  memberName: string,
  wardNumber: number,
) {
  const wardRef = doc(db, "wards", wardDocId);
  const wardSnap = await getDoc(wardRef);

  const wardData: Record<string, any> = {
    assignedMemberId: memberId,
    assignedMemberName: memberName,
    wardNumber,
    wardName: WARD_NAMES[wardNumber] ?? String(wardNumber),
    pendingIssues: 0,
    resolvedIssues: 0,
    totalIssues: 0,
  };

  if (!wardSnap.exists()) {
    // Create the ward document from scratch
    await setDoc(doc(db, "wards", wardDocId), {
      ...wardData,
      createdAt: serverTimestamp(),
    });
  } else {
    // Preserve existing issue counts; only overwrite member + meta fields
    const existing = wardSnap.data();
    await updateDoc(wardRef, {
      assignedMemberId: memberId,
      assignedMemberName: memberName,
      wardNumber,
      wardName: WARD_NAMES[wardNumber] ?? String(wardNumber),
      // Only reset counts if they don't already exist
      pendingIssues: existing.pendingIssues ?? 0,
      resolvedIssues: existing.resolvedIssues ?? 0,
      totalIssues: existing.totalIssues ?? 0,
    });
  }
}

/**
 * Retrieves a ward document by its Firestore document ID.
 */
export async function getWard(wardDocId: string) {
  const snap = await getDoc(doc(db, "wards", wardDocId));
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() };
}

/**
 * Returns all ward documents.
 */
export async function getAllWards() {
  const snap = await getDocs(collection(db, "wards"));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

/**
 * Finds the ward document assigned to a specific member UID.
 */
export async function getWardByMemberId(memberId: string) {
  const q = query(collection(db, "wards"), where("assignedMemberId", "==", memberId));
  const snap = await getDocs(q);
  if (snap.empty) return null;
  const d = snap.docs[0];
  return { id: d.id, ...d.data() };
}

export default app;
