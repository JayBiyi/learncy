import app from ".././firebase";
import {
  getFirestore,
  collection,
  deleteDoc,
  getDoc,
  updateDoc,
  deleteField,
  doc,
  setDoc,
  getDocs,
} from "firebase/firestore";

//Email is used as the user id

export default function getDataBase() {
  const db = getFirestore(app);
  const usersDbRef = collection(db, "users");
  async function addUser(email, name) {
    await setDoc(doc(usersDbRef, email), { name });
  }
  async function sendNotification(from, to, message) {
    const res = await setDoc(
      doc(collection(db, `users/${to}/notifications`), from),
      { message }
    )
      .then((r) => console.log(r))
      .catch((e) => console.log(e));
    return res;
  }

  async function addCard(uid, category, cardId, card) {
    return await setDoc(
      doc(collection(db, `users/${uid}/cards`), category),
      { [cardId]: card },
      { merge: true }
    );
  }

  async function getCardsInCategory(uid, category) {
    //returns an array of 0bjects
    const arr = [];
    const collectionRef = doc(db, `users/${uid}/cards/${category}`);
    const querySnap = await getDoc(collectionRef);
    for (let card in querySnap.data()) {
      arr.push({ [card]: querySnap.data()[card] });
    }
    return arr.length ? arr : null;
  }

  async function fetchCardCategories(uid) {
    const arr = [];
    const querySnapshot = await getDocs(collection(db, `users/${uid}/cards`));
    querySnapshot.forEach((doc) => {
      arr.push(doc.id);
    });

    return arr;
  }
  async function deleteNotification(uid, id) {
    const ref = doc(db, `users/${uid}/notifications/${id}`);
    await deleteDoc(ref).then(() => console.log("deleted ",id," for",uid));
  }
  async function deleteCard(uid, category, cardId) {
    const ref = doc(db, `users/${uid}/cards/${category}`);
    return await updateDoc(ref, {
      [cardId]: deleteField(),
    });
  }
  async function getNotifications(uid) {
    return await getDocs(collection(db, `users/${uid}/notifications`));
  }

  return {
    db,
    fetchCardCategories,
    getNotifications,
    addUser,
    addCard,
    sendNotification,
    getCardsInCategory,
    deleteCard,
    deleteNotification,
  };
}

// {email: 'b@gmail.com', username: 'bnzk',cards: []}

//collection users > document user > collection cards > document card
