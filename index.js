import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  collection,
  onSnapshot,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0OQ4Uera27uMO8YB95HYf2roCOMrUJQs",
  authDomain: "crud-ee07e.firebaseapp.com",
  projectId: "crud-ee07e",
  storageBucket: "crud-ee07e.appspot.com",
  messagingSenderId: "666520724549",
  appId: "1:666520724549:web:180e060f310e92d4552f2c",
  measurementId: "G-0FD9SHENS1",
};

const app = initializeApp(firebaseConfig);
const accts = collection(db, "items");
const db = getFirestore(app);

const accounts = document.getElementById(accounts);
const form = document.getElementById(formm);

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;

  await addDoc(accts, { Email: email });

  document.getElementById("email").value = "";
});

onSnapshot(accts, (snapshot) => {
  snapshot.forEach((doc) => {
    const data = doc.data();
    let h3 = document.createElement("h3");
    h3.textContent = data.email;
    accounts.innerHTML += h3;
  });
});
