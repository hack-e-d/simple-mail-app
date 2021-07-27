import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import './components/MailBox.js'

import './App.css';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import MailBox from './components/MailBox.js';
import SignIn from './components/SignIn.js';

firebase.initializeApp({
  apiKey: "AIzaSyDExnUZi4WB94OQ6h1LJnOPl8v89H_17v0",
  authDomain: "simple-mail-app.firebaseapp.com",
  projectId: "simple-mail-app",
  storageBucket: "simple-mail-app.appspot.com",
  messagingSenderId: "584763410018",
  appId: "1:584763410018:web:e891154a280fc42aa2733b",
  measurementId: "G-EJXTRQ6REH"
})

const auth = firebase.auth();

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <h1> Welcome Hacked Mail Platform</h1>
      <div className='app-container'>
        {user ? <MailBox firebase={firebase} /> : <SignIn auth={auth}/>}
      </div>
    </div>
  );
}

export default App;
