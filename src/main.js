import Vue from "vue"
import App from "./App.vue"
import "./registerServiceWorker"
import router from "./router"
import store from "./store"
import axios from "axios"
import "@/assets/css/tailwind.css"
import "animate.css/animate.min.css"
import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

Vue.prototype.$axios = axios
Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyCxPxBLxst_NoH1aOhKmi1Ik0GywlA71pI",
  authDomain: "test-d004d.firebaseapp.com",
  databaseURL: "https://test-d004d.firebaseio.com",
  projectId: "test-d004d",
  storageBucket: "test-d004d.appspot.com",
  messagingSenderId: "1098907276172",
  appId: "1:1098907276172:web:ff7d5b6cba1b7dbf5a7ca9",
  measurementId: "G-BT1L1GFY1R",
})

export const db = firebase.firestore()
export const auth = firebase.auth()

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
