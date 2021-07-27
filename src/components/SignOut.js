import react from 'react';
import { FaSignOutAlt } from 'react-icons/fa';

const SignOut = ({auth}) => {
    return (
        auth.currentUser && (
            <div className='signout'>
                <FaSignOutAlt className="signout-option" onClick={() => auth.signOut()} size='1.5rem' />
            </div>
        )
    );
};

export default SignOut;