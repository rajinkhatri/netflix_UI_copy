import './css/Notfound.css'
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div className="page">
            <div className="not-found">
                <img src="https://miro.medium.com/v2/resize:fit:1358/0*QOZm9X5er1Y0r5-t" alt="" />
                <h1>Page is under development or not available.</h1>
                <Link to='/'>
                    <p>
                    Go to home instead.
                    </p>
                    </Link>
            </div>
        </div>
    )
};

export default Notfound;