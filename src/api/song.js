import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { map } from "lodash";
import { v4 as uuidv4 } from "uuid";
import { db } from "../utils";

export class Song {
  collectionName = "songs";

  async create(name, album, file) {
    try {
      const id = uuidv4();
      const created_at = new Date();
      const data = { id, name, album, file, created_at };
      const docRef = doc(db, this.collectionName, id);

      await setDoc(docRef, data);
    } catch (error) {
      throw error;
    }
  }

  async containAllByAlbum(idAlbum) {
    try {
      const whereRef = where("album", "==", idAlbum);
      const collectionRef = collection(db, this.collectionName);
      const queryRef = query(collectionRef, whereRef);
      const snapshot = await getDocs(queryRef);

      return map(snapshot.docs, (doc) => doc.data());
    } catch (error) {
      throw error;
    }
  }
}
