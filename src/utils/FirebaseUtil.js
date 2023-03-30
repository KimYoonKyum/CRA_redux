import {initializeApp} from 'firebase/app'
import {child, DatabaseReference, get, getDatabase, push, ref, set} from '@firebase/database'

const getFireBaseDBByPath = (path) => {
  if (!path) {
    console.log('get Database failed. invalid or empty key')
    return
  }

  try {
    const firebaseConfig = {
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_FIREBASE_APP_ID,
      measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
    }
    const app = initializeApp(firebaseConfig)
    const db = getDatabase(app)
    return ref(db, path || '')
  } catch (e) {
    console.log('get Database failed.')
    return null
  }
}

const getFireBaseData = async (dbRef, path) => {
  return await get(child(dbRef, path))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val()
      } else {
        console.log('No data available')
        return null
      }
    })
    .catch((error) => {
      console.log(error)
      return null
    })
}

const getRowKey = (dbRef) => {
  return push(dbRef).key
}

const insertData = (dbRef, key, data, onSuccess, onError) => {
  if (!key) {
    console.log('insert failed. invalid or empty key')
    return
  }

  if (!data) {
    console.log('insert failed. invalid or empty value')
    return
  }

  const targetDbRef = child(dbRef, key)
  set(targetDbRef, data)
    .then(() => {
      onSuccess()
    })
    .catch(() => {
      console.log('insert error')
      onError()
    })
}

export {getFireBaseDBByPath, getFireBaseData, getRowKey, insertData}