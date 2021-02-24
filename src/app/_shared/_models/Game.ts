import firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

export class Game {
  gameUid: string | undefined;
  name!: string;
  imageUrl!: string;
  rating!: boolean;
  views: number | undefined;
  lastUpdate!: Timestamp;
}
