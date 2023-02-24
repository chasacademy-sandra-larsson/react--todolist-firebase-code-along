import { initializeApp } from 'firebase/app';

import {
  getFirestore
} from 'firebase/firestore';

const firebaseConfig = {
 // Din config
 apiKey: "AIzaSyC5iHdVpGijRdGYI_9bqinncKGtvtuzze8",
 authDomain: "todo-list-react-24-2.firebaseapp.com",
 projectId: "todo-list-react-24-2",
 storageBucket: "todo-list-react-24-2.appspot.com",
 messagingSenderId: "315184499628",
 appId: "1:315184499628:web:74f2ed23d3a5b7f4bd0809"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db