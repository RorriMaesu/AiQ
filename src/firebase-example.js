// This is an EXAMPLE file showing how to integrate Firebase
// To use this, rename to firebase.js and add your Firebase config

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { getAuth, signInAnonymously } from 'firebase/auth';

// Your web app's Firebase configuration
// Replace with your actual Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Sign in anonymously
export const signInAnon = async () => {
  try {
    const userCredential = await signInAnonymously(auth);
    return userCredential.user;
  } catch (error) {
    console.error("Error signing in anonymously:", error);
    return null;
  }
};

// Save a score to Firestore
export const saveScore = async (score, username = "Anonymous") => {
  try {
    const user = auth.currentUser || await signInAnon();
    
    if (!user) return null;
    
    const docRef = await addDoc(collection(db, "scores"), {
      score: score,
      username: username,
      userId: user.uid,
      timestamp: new Date()
    });
    
    return docRef.id;
  } catch (error) {
    console.error("Error saving score:", error);
    return null;
  }
};

// Get top scores from Firestore
export const getTopScores = async (limit = 10) => {
  try {
    const q = query(
      collection(db, "scores"), 
      orderBy("score", "desc"), 
      limit(limit)
    );
    
    const querySnapshot = await getDocs(q);
    const scores = [];
    
    querySnapshot.forEach((doc) => {
      scores.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return scores;
  } catch (error) {
    console.error("Error getting top scores:", error);
    return [];
  }
};

export { db, auth };
