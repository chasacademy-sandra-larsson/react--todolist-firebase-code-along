import {
    getFirestore,
    collection,
    getDocs,
    onSnapshot,
    addDoc,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
    query,
    where,
  } from "firebase/firestore";

  import db from './firebase'

export const addTodosDB = async (todo) => {
  try {
    const docRef = await addDoc(collection(db, "todos"), todo);
    console.log("Document written with ID: ", docRef.id);  
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const updateTodosDB = async (id, todo) => {
  try {
    const docRef = doc(db, "todos", id);
    await updateDoc(docRef, todo);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const deleteTodoDB = async (id) => {
  try {
    const docRef = doc(db, "todos", id);
    await deleteDoc(docRef);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
