import '../css/Home.css';
import logo from "/baking-soc-logo.png";
import Tilt from 'react-parallax-tilt';

function Home() {
    return (
        <section className="hero-section">
            <div className="hero-inner-container">
                <div className="hero-content">
                    <h1 className="hero-title">Welcome to the Baking Society!</h1>
                    <p className="hero-subtitle">
                        The University of St Andrews' community for everyone who loves to bake, share, and learn.
                        Join us for fun events, delicious recipes, and great company.
                    </p>
                    <a href="#events" className="hero-cta-button">Explore Our Events</a>
                </div>
                <div className="hero-image-container">
                    <Tilt glareEnable={true} glareMaxOpacity={0.7} >
                        <img src={logo} alt="Baking Soc Logo" className="hero-logo" />
                    </Tilt>
                </div>
            </div>
        </section>
    );
}

export default Home;