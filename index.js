import { error } from "console";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getDatabase,
  ref,
  child,
  get,
  set,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyA0OQ4Uera27uMO8YB95HYf2roCOMrUJQs",
  authDomain: "crud-ee07e.firebaseapp.com",
  databaseURL: "https://crud-ee07e-default-rtdb.firebaseio.com",
  projectId: "crud-ee07e",
  storageBucket: "crud-ee07e.appspot.com",
  messagingSenderId: "666520724549",
  appId: "1:666520724549:web:180e060f310e92d4552f2c",
  measurementId: "G-0FD9SHENS1",
};

const app = initializeApp(firebaseConfig);

const db = getDatabase();

let favouriteFood = document.getElementById("favourite_food");
let Username = document.getElementById("username");
let Password = document.getElementById("password");
let Email = document.getElementById("email");

let CrtBtn = document.getElementById("CrtBtn");
let RetBtn = document.getElementById("RetBtn");
let UpdBtn = document.getElementById("UpdBtn");
let DelBtn = document.getElementById("DelBtn");

function AddData() {
  set(ref(db, `User/` + Username.value), {
    email: Email.value,
    passsword: Password.value,
    username: Username.value,
    favouriteFood: favouriteFood.value,
  })
    .then(() => {
      alert("Successfully added data");
    })
    .catch((error) => {
      alert("Unsuccessful");
      console.log(error);
    });
}

function RetData() {
  const dbRef = ref(db);

  get(child(dbRef, `User/` + Username.value))
    .then((snapshot) => {
      if (snapshot.exists()) {
        Email.value = snapshot.val().email;
        Password.value = snapshot.val().passsword;
        Username.value = snapshot.val().username;
        favouriteFood.value = snapshot.val().favouriteFood;
      } else {
        alert("NULL");
      }
    })
    .catch((error) => {
      alert("Unsuccessful");
      console.log(error);
    });
}

function UpdData() {
  update(ref(db, `User/` + Username.value), {
    email: Email.value,
    passsword: Password.value,
    favouriteFood: favouriteFood.value,
  })
    .then(() => {
      alert("Successfully updated data");
    })
    .catch((error) => {
      alert("Unsuccessful");
      console.log(error);
    });
}

function DelData() {
  remove(ref(db, `User/` + Username.value))
    .then(() => {
      alert("Successfully deleted data");
    })
    .catch((error) => {
      alert("Unsuccessful");
      console.log(error);
    });
}

CrtBtn.addEventListener("click", AddData);
RetBtn.addEventListener("click", RetData);
UpdBtn.addEventListener("click", UpdData);
DelBtn.addEventListener("click", DelData);
