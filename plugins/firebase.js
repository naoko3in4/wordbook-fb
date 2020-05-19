import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
  APIKEY: process.env.apiKey,
  AUTHDOMAIN: process.env.authDomain,
  DATABASEURL: process.env.databaseURL,
  projectId: process.env.projectId,
  STORAGEBUCKET: process.env.storageBucket,
  MESSAGINGSENDERID: process.env.messagingSenderId,
  APPID: process.env.appId,
  MESUREMENTID: process.env.measurementId
}

if (!firebase.apps.length) {
  firebase.initializeApp(config);
  firebase.analytics();
}

// Realtime Database
const db = firebase.database()
const auth = firebase.auth()

export { db, auth }
export default firebase