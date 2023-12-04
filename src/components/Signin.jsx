import './css/Signin.css';
import { Link } from 'react-router-dom';
import Footersection from './Footer';

const Signin = () => {
    return (
        <div className="container container-bg sign-in">
            <div className="Header">
                <h1 className='Header-top'>NETFLIX</h1>
            </div>
            <div className="secondary">
                <div className="input-table">
                    <h1>Sign in</h1>
                    <input type="text" placeholder="Email or phone number" />
                    <input type="text" placeholder='Password' />
                    <button>Sign in</button>
                    <div className="small-part">
                        <p>Remember me</p>
                        <p>Need Help?</p>
                    </div>
                </div>
                <div className="below-part">
                    <p>New to Netflix?
                        <strong>Sign up now</strong>
                    </p>
                    <p>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.
                        <Link to="#">Learn more.</Link>
                    </p>
                </div>
            </div>
            <Footersection />
        </div>
    )
};

export default Signin;