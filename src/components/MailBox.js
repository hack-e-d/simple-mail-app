import React from 'react';
import 'firebase/firestore';
import 'firebase/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import SignOut from './SignOut';
import SendMail from './SendMail';
import Mails from './Mails';

const MailBox = ({firebase}) => {
    
    const auth = firebase.auth();
    const firestore = firebase.firestore();

    const mailRef = firestore.collection('mails');
    const query = mailRef.where("recevierEmailId", "==", auth.currentUser.email);
    const [mails] = useCollectionData(query, {ifField: 'id'});


    return (
        <div>
            <div>
                <SignOut auth={auth}/>
            </div>
            <h2>Inbox</h2>
            <div className='inbox'>
                {mails && mails.map(mail => <Mails key={mail.id} mail={mail} />)}
            </div>
            <div>
                <SendMail firebase={firebase} />
            </div>
        </div>
    )
};

export default MailBox;