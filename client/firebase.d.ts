import { Auth } from 'firebase/auth';
import { Firestore, CollectionReference } from 'firebase/firestore';
import { FirebaseStorage } from 'firebase/storage';
import { FirebaseApp } from 'firebase/app';

export const app: FirebaseApp;
export const auth: Auth;
export const storage: FirebaseStorage;
export const db: Firestore;
export const postsRef: CollectionReference;
