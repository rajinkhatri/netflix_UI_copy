import './css/Header.css';
import { Link } from 'react-router-dom';

const Header  = () => {
    return(
        <div className="Header">
            <h1 className='Header-top'>NETFLIX</h1>
            <button className='button Header-top'>
                <strong>
                    <Link to="/signin">Sign in</Link>
                    {/* <a href='#'>Sign in</a> */}
                    </strong>
            </button>
        </div>
    )
};

export default Header;