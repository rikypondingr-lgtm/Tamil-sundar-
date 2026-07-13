import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Firebase Config
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKnggyJiIButUVGOQZc7BtGU0YRVW_T7I",
  authDomain: "tamilsuder-67048.firebaseapp.com",
  databaseURL: "https://tamilsuder-67048-default-rtdb.firebaseio.com",
  projectId: "tamilsuder-67048",
  storageBucket: "tamilsuder-67048.firebasestorage.app",
  messagingSenderId: "881953492755",
  appId: "1:881953492755:web:a4824cba4d4df849b714e6",
  measurementId: "G-XBG9NK8T21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Wait until page loads
document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector(".contact-form");

    if (!form) {
        alert("❌ Contact form not found!");
        return;
    }

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const phone = form.querySelector('input[type="tel"]').value.trim();
        const date = form.querySelector('input[type="date"]').value;
        const message = form.querySelector("textarea").value.trim();

        try {
            await addDoc(collection(db, "bookings"), {
                name,
                email,
                phone,
                date,
                message,
                createdAt: new Date()
            });

            alert("✅ Booking submitted successfully!");
            form.reset();

        } catch (error) {
            console.error("Firebase Error:", error);
            alert("❌ Error: " + error.message);
        }
    });

});