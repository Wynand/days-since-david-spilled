import firebase from 'firebase/app'
import 'firebase/database'
const config = {
    authDomain: "david-spill-backend.firebaseapp.com",
    databaseURL: "https://david-spill-backend.firebaseio.com",
    projectId: "david-spill-backend",
    storageBucket: "david-spill-backend.appspot.com",
};
firebase.initializeApp(config);
export default firebase;