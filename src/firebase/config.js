import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCKJP65xiP7SlooyA-ZNLvpB3hp4fXGm9c',
  authDomain: 'cookingninjasite.firebaseapp.com',
  projectId: 'cookingninjasite',
  storageBucket: 'cookingninjasite.appspot.com',
  messagingSenderId: '33095464589',
  appId: '1:33095464589:web:fc8ba845c464970e4494c4',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
