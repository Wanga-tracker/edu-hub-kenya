// firebase-config.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js';
import { getMessaging } from 'https://www.gstatic.com/firebasejs/11.8.1/firebase-messaging.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjsxzqXwW2PcwowbFSb4jiGTHGv9rdL0w",
  authDomain: "agent-hive-project.firebaseapp.com",
  databaseURL: "https://agent-hive-project-default-rtdb.firebaseio.com",
  projectId: "agent-hive-project",
  storageBucket: "agent-hive-project.firebasestorage.app",
  messagingSenderId: "464476218600",
  appId: "1:464476218600:web:59aa5ba90c73468d78155d",
  measurementId: "G-YGQ85D592J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const messaging = getMessaging(app);

export { app, auth, db, messaging };
