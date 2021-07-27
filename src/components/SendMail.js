import react, { useRef, useState } from "react";
import { RiMailSendFill } from 'react-icons/ri'
import 'firebase/firestore';
import 'firebase/auth';

const SendMail = ({firebase}) =>{

    const firestore = firebase.firestore();
    const auth = firebase.auth();

    // const dummy = useRef();
    const mailRef = firestore.collection('mails');

    // States
    const [mailBody,setMailBody] = useState('');
    const [recevierEmailId ,setRecevierEmailId] = useState('');

    const sendMail = async (e) => {
        e.preventDefault();

        const {displayName, uid, photoURL } = auth.currentUser;
        await mailRef.add({
            user: displayName,
            uid: uid,
            photoURL: photoURL,
            body: mailBody,
            recevierEmailId: recevierEmailId,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setMailBody('');
        setRecevierEmailId('');
        alert("Email Sent....");
        // dummy.current.scrollIntoView({ behavior: 'smooth'});
    }

    return (
        <div>
            <h2>
                New Mail
            </h2>
            <div className='mail-sender-container'>
                <form onSubmit={sendMail} >
                    <input type='email' value={recevierEmailId} onChange={(e) => setRecevierEmailId(e.target.value)} placeholder='Receiver Email Id' />
                    <input type='text' value={mailBody} onChange={(e) => setMailBody(e.target.value)} placeholder='Enter the mail body.....' />
                    <button className='send-button' type='submit' disabled={!mailBody && !recevierEmailId}><RiMailSendFill size='1.5rem'/></button>
                </form>
            </div>
        </div>
    )
}

export default SendMail;