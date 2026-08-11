import { initializeApp, getApps, cert, getApp, App } from "firebase-admin/app";
import { getFirestore, Firestore } from "firebase-admin/firestore";
import { getAuth, Auth } from "firebase-admin/auth";
import { getStorage, Storage } from "firebase-admin/storage";

let adminApp: App | undefined;

if (!getApps().length) {
  try {
    if (process.env.FIREBASE_CLIENT_EMAIL && process.env.FIREBASE_PRIVATE_KEY) {
      adminApp = initializeApp({
        credential: cert({
          projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "deltawavex",
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        }),
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      });
    }
  } catch (error) {
    console.warn("Firebase admin initialization warning:", error);
  }
} else {
  adminApp = getApp();
}

export const adminDb: Firestore = (adminApp ? getFirestore(adminApp) : null) as unknown as Firestore;
export const adminAuth: Auth = (adminApp ? getAuth(adminApp) : null) as unknown as Auth;
export const adminStorage: Storage = (adminApp ? getStorage(adminApp) : null) as unknown as Storage;
