import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC2E_1QPwbcMjsUET5cAoPTEdXabXnefFw",
    authDomain: "phrasal-verve-307617.firebaseapp.com",
    projectId: "phrasal-verve-307617",
    storageBucket: "phrasal-verve-307617.appspot.com",
    messagingSenderId: "676790455021",
    appId: "1:676790455021:web:61cf631d4edb1835c35ae4"
  };
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 export default firebase