import firebase from 'firebase/app';
import 'firebase/firestore'
// import 'firebase/database'
import 'firebase/storage'

var config = {
  apiKey: "AIzaSyDzyK4Mflvtdyn84SGPSu2Udq1zkV_iOJI",
  authDomain: "exam-image-gallery.firebaseapp.com",
  databaseURL: "https://exam-image-gallery.firebaseio.com",
  projectId: "exam-image-gallery",
  storageBucket: "exam-image-gallery.appspot.com",
  messagingSenderId: "968438638429"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase;
export const firestore = firebase.firestore();
// export const database = firebase.database();
export const storage = firebase.storage();