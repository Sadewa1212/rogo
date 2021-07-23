import firebase from 'firebase';
import { firebaseConfig } from './firebase.config';

export const firebaseApp: firebase.app.App = firebase.initializeApp(firebaseConfig);