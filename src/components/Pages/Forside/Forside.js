import React, { useState } from 'react';
import FetchData from './FetchForside';
import Footer from '../../Footer/Footer';
import Hero from '../../images/hero.jpg';
import './FetchComponent.css';


function Forside() {

    const [isShown, setIsShown] = useState(false);

    return (
        <div className="maindiv">
            <img className="hero-img" src={Hero} />
            <h2 className="hero-txt">NYHEDER</h2>
            <FetchData />
            <button className="newsarchive">NYHEDSARKIV</button>
            <Footer />
        </div >
    );
}

export default Forside;
