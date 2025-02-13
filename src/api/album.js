import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { map, orderBy } from "lodash";
import { v4 as uuidv4 } from "uuid";
import { db } from "../utils";

export class Album {
  collectionName = "albums";

  async create(name, image, artist) {
    try {
      const id = uuidv4();
      const created_at = new Date();
      const data = { id, name, image, artist, created_at };
      const docRef = doc(db, this.collectionName, id);

      await setDoc(docRef, data);
    } catch (error) {
      throw error;
    }
  }

  async obtainAll() {
    try {
      const collectionRef = collection(db, this.collectionName);
      const snapshot = await getDocs(collectionRef);

      return map(snapshot.docs, (doc) => doc.data());
    } catch (error) {
      throw error;
    }
  }

  async getAlbum(id) {
    try {
      const docRef = doc(db, this.collectionName, id);
      const snapshot = await getDoc(docRef);

      return snapshot.data();
    } catch (error) {
      throw error;
    }
  }

  async getAlbumsByArtist(idArtist) {
    try {
      const whereRef = where("artist", "==", idArtist);
      const collectionRef = collection(db, this.collectionName);
      const queryRef = query(collectionRef, whereRef);
      const snapshot = await getDocs(queryRef);

      return map(snapshot.docs, (doc) => doc.data());
    } catch (error) {
      throw error;
    }
  }

  async getLastAlbums(limitItems = 20) {
    try {
      const collectionRef = collection(db, this.collectionName);
      const orderByRef = orderBy("created_at", "desc");
      const limitRef = limit(limitItems);
      const queryRef = query(collectionRef, orderByRef, limitRef);
      const snapshot = await getDocs(queryRef);

      return map(snapshot.docs, (doc) => doc.data());
    } catch (error) {
      throw error;
    }
  }
}
