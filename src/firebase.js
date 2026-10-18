import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA0FOdDI2SsTL0afNx4-SPdbW562eyQ4lo",
  authDomain: "rumbo-39749.firebaseapp.com",
  projectId: "rumbo-39749",
  storageBucket: "rumbo-39749.firebasestorage.app",
  messagingSenderId: "935426761635",
  appId: "1:935426761635:web:a3445f97db01010584f016",
  measurementId: "G-XPEX2ZQVPB"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)