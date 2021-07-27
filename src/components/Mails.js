import react from 'react';

const Mails = (props) => {
    
    const { user, body, photoURL, recevierEmailId, uid } = props.mail;
    return (
        <div className='mail'>
            <div className='mail-header'>
                <span>
                    <img src={photoURL || 'https://i.imgur.com/rFbS5ms.png'} alt='sender photo' />
                </span>
                <span className='sender-name'>
                    {user}
                </span>
            </div>
            <div className='mail-body'>
                {body}
            </div>
        </div>
    )
}

export default Mails;