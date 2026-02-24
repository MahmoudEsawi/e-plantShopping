import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="landing-page">
            <div className="overlay"></div>
            <div className="hero-content">
                <h1>Paradise Nursery</h1>
                <p>
                    Welcome to Paradise Nursery, your number one source for all things green!
                    We're dedicated to giving you the very best of houseplants, with a focus on
                    quality, health, and a positive environmental impact. Founded with a passion
                    for bringing nature indoors, we strive to turn our passion into a booming
                    online store. We hope you enjoy our plants as much as we enjoy offering them to you.
                </p>
                <Link to="/products">
                    <button className="get-started-btn">Get Started</button>
                </Link>
            </div>
        </div>
    );
};

export default AboutUs;
