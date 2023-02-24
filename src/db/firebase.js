import { initializeApp } from 'firebase/app';

import {
  getFirestore
} from 'firebase/firestore';

const firebaseConfig = {
 // Din config
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db
