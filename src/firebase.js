import firebase from 'firebase';

const firebaseApp=firebase.initializeApp({
       apiKey: "AIzaSyCR82n-npCSpet59hjLnkLGWA8sTMOzYf8",
       authDomain: "instagram-clone-fb825.firebaseapp.com",
       databaseURL: "https://instagram-clone-fb825.firebaseio.com",
       projectId: "instagram-clone-fb825",
       storageBucket: "instagram-clone-fb825.appspot.com",
       messagingSenderId: "60106447704",
       appId: "1:60106447704:web:cadad318c4274515ef232d",
       measurementId: "G-DSTS90KKE0"
});


const db=firebaseApp.firestore();
const auth =firebase.auth()
const storage =firebase.storage();

export {db,auth,storage};

//export default db