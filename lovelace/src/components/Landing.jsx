import React from 'react';
import { Link } from 'react-router-dom';
import InvestmentIllustration from '../assets/invest-illo.svg';

const Landing = () => {
    return(
        <div className="row">
            <div className="col hero">
                <div className="content">
                    <h1>Mortgage estimates for this generation.</h1>
                    <p className="lead">
                        Compare monthly rental payments to FHA, VA, and low-down-payment mortgage estimates to see how much you’d really be saving.
                    </p>
                    <Link to="/steps" className="button primary">Get Started</Link>
                </div>
            </div>
            <div className="col hero-img">
                <img src={InvestmentIllustration} alt="investment illustration"/>
            </div>
        </div>
    )
}

export default Landing;