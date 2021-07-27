import React from 'react';
import firebase from 'firebase/app';

const SignIn = ({auth}) =>{
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
      }
    return (
        <div className="">
            <button className="" onClick={signInWithGoogle}>
            <img className="w-5 mr-2 block" src={process.env.PUBLIC_URL + '/google-icon.svg'} alt='Google Icon' />
            <span className="block">Sign In With Google</span>
          </button>
        </div>
      )
}

export default SignIn;