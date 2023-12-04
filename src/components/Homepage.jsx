import './css/Homepage.css'
import Header from './Header';
import Footersection from './Footer';

const Mainpage = () => {
    return (
        <div>
            <Home />
            <Secondarysection />
            <Thirdsection />
            <Fourthsection />
            <Fifthsection />
            <Faq />
            <Footersection />
        </div>

    )
}

const Home = () => {
    return (
        <div className="container container-bg">
            <Header />
            <Mainsection />
        </div>
    )
};

const Mainsection = () => {
    return (
        <div className="bottom">
            <p className='desc-top-bold '>Unlimited movies, TV shows, and more</p>
            <p className='desc-mid '>Watch anywhere. Cancel anytime.</p>
            <p className='desc-bot margin-bot'>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="row-in-landscape">
                <input type='text' className='margin-bot' placeholder='Email Address' />
                <button >Get Started<code> > </code></button>
            </div>
        </div>
    )
};

const Secondarysection = () => {
    return (
        <div className='container section '>
            <div className="card-container">
            <div className='text-col-first'>
                <p className='section-top-bold'>Enjoy on your TV</p>
                <p className='section-mid'>Watch on Smart TVs, Playstation, Xbox, Chromecast,
                    Apple TV, Blu-ray players, and more.
                </p>
            </div>
                <div className="image-col">
                <img className='section-img' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png' />
                </div>
            </div>
            {/* I have no idea how to make those sliding animations inside the TV */}
        </div>
    )
};

const Thirdsection = () => {
    return (
        <div className="container section">
            <div className="card-container third">
                <div className="text-col-first">
            <p className="section-top-bold">Download your shows to watch offline</p>
            <p className="section-mid">Save your favourites easily and always have something to watch.</p>
                </div>
                <div className="image-col">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" className="section-img" />
                </div>
            </div>
        </div>
    )
};

const Fourthsection = () => {
    return (
        <div className="container section">
            <div className="card-container">
                <div className="text-col-first">
            <p className="section-top-bold">Watch everywhere</p>
            <p className="section-mid width-down">Stream unmilited movies and TV shows on your phone, tablet, laptop, and TV</p>
                </div>
                <div className="image-col">
                    <img src="" alt="" className="section-img" />
                </div>
            </div>
        </div>
    )
};

const Fifthsection = () => {
    return (
        <div className="section container">
            <div className="card-container third">
            <div className="text-col-first">
            <p className="section-top-bold">Create profile for kids</p>
            <p className="section-mid">Send kids on adventures with their favourite characters in a space made for them-free with your membership.</p>
            </div>
            <div className="image-col">
            <img src="https://occ-0-7254-58.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55" className="section-img" />
            </div>
            </div>
        </div>
    )
};

const Faq = () => {
    return (
        <div className="container section">
            <p className="footer-top-bold">Frequently Asked Questions</p>
            <button className="footer-button">
                <div className="footer-button-div">
                    <p className="footer-desc">What is Netflix?</p>
                    <p>+</p>
                </div>
            </button>

            <button className="footer-button">
                <div className="footer-button-div">
                    <p className="footer-desc">How much does Netflix cost?</p>
                    <p>+</p>
                </div>
            </button>

            <button className="footer-button">
                <div className="footer-button-div">
                    <p className="footer-desc">Where can i watch?</p>
                    <p>+</p>
                </div>
            </button>

            <button className="footer-button">
                <div className="footer-button-div">
                    <p className="footer-desc">How do i cancel?</p>
                    <p>+</p>
                </div>
            </button>

            <button className="footer-button">
                <div className="footer-button-div">
                    <p className="footer-desc">What can i watch on Netflix?</p>
                    <p>+</p>
                </div>
            </button>

            <button className="footer-button">
                <div className="footer-button-div">
                    <p className="footer-desc">Is Netflix good for kids?</p>
                    <p>+</p>
                </div>
            </button>
            <br />
            <br />
            <p className="section-mid move-side">
                Ready to watch? Enter your email to create or restart your membership.
            </p>

            <div className="footer-components">
                <input type='text' placeholder='Email Address' />
                <button className='margin-auto'>Get Started<code> > </code></button>
            </div>
        </div>
    )
}

export default Mainpage;