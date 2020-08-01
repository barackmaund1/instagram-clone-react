import firebase from 'firebase';

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyAyOIToodZS6dXK4auncG-hbJXWo6fOgO4",
    authDomain: "intagram-clone-react-32f62.firebaseapp.com",
    databaseURL: "https://intagram-clone-react-32f62.firebaseio.com",
    projectId: "intagram-clone-react-32f62",
    storageBucket: "intagram-clone-react-32f62.appspot.com",
    messagingSenderId: "308300433640",
    appId: "1:308300433640:web:8d9a7e5e62df32eb4b615d",
    measurementId: "G-9GG1SL2ZBJ"
});


const db=firebaseApp.firestore();
const auth =firebase.auth()
const storage =firebase.storage();

export {db,auth,storage};

//export default db