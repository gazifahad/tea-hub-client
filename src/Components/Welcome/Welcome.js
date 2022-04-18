import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import welcomeImage from './weclome-stall.jpg';

const Welcome = () => {   
    const [user] = useAuthState(auth);

    console.log(user);  
    return (
        <div className='d-flex flex-column align-items-center my-5'>
            <h3>Welocme to our stall</h3>
            <div className='text-center'>
                <img className='img-fluid' src={welcomeImage} alt='welcomeimage' />
            </div>

        </div>
    );
};

export default Welcome;