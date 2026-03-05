import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase
// IMPORTANTE: Reemplaza estos valores con los de tu proyecto de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAZCodNdJgJlP10fThkhIW9rXvesj4auDw",
  authDomain: "react-coder-9ef9a.firebaseapp.com",
  projectId: "react-coder-9ef9a",
  storageBucket: "react-coder-9ef9a.firebasestorage.app",
  messagingSenderId: "712030091073",
  appId: "1:712030091073:web:566c13864264939e68d3c0"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
export const db = getFirestore(app);
