import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueRouter from "./router/index"; // 追加

import "bootstrap/dist/css/bootstrap.min.css" //　追加

// createApp(App).use(VueRouter).mount("#app");


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-8GGxjAt-NhLXGe5BjHUAS1r0j32QY6I",
  authDomain: "vite-project-cc82c.firebaseapp.com",
  projectId: "vite-project-cc82c",
  storageBucket: "vite-project-cc82c.appspot.com",
  messagingSenderId: "752926617221",
  appId: "1:752926617221:web:ed31eaf60dd25b36f7c3ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
createApp(App).use(VueRouter).mount("#app");