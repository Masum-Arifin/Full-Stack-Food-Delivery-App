import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDIfOv3-w8VoPXNG6y5fkhwahRESXSJAQI",
  authDomain: "restaurantapp-c85a9.firebaseapp.com",
  databaseURL: "https://restaurantapp-c85a9-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-c85a9",
  storageBucket: "restaurantapp-c85a9.appspot.com",
  messagingSenderId: "159725715033",
  appId: "1:159725715033:web:02ab106c1b7e6eb7323b48",
};

const app = getApps.length > 0 ? getApp() :  initializeApp(firebaseConfig); 

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };