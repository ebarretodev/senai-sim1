import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCvWXoffQajAOBDdY28Ccy8sc6Y0uLNG2E",
  authDomain: "senai-sim1.firebaseapp.com",
  databaseURL: "https://senai-sim1-default-rtdb.firebaseio.com",
  projectId: "senai-sim1",
  storageBucket: "senai-sim1.appspot.com",
  messagingSenderId: "511422590894",
  appId: "1:511422590894:web:0f9a81420df1e74764a23f"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);