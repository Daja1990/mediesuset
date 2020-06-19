import React from 'react';
import Styles from "./Footer.css";
import Twitter from '../images/twitter-brands.svg';
import Facebook from '../images/facebook-f-brands.svg';
import Crowd from '../images/crowd.jpg';
import Hancock from '../images/hancock.png';
import HancockTxt from '../images/smagforskellen.png';

export default function Footer(props) {
    return (
        <footer className={Styles.sitefooter}>
            <h3 className="footerheader">Følg Os</h3>
            <div className="blank">
                <img className="twitter-img" src={Twitter} />
            </div>
            <div className="centerair"></div>
            <div className="blank">
                <img className="twitter-img" src={Facebook} />
            </div>

            <img className="crowd" src={Crowd} />
            <div className="lol">
                <h2 className="footerh2">TILMELD NYHEDSBREV</h2>
                <h3 className="footerh3">Få seneste nyt sendt direkte til din indbakke</h3>
                <form className="formclass">
                    <input id="mail" className="inputnyhed" type="email" id="fname" name="fname" placeholder="INDTAST DIN E-MAIL" />
                    <button id="send" className="nyhedbutton" type="button">TILMELD</button>
                </form>
            </div>

            <div className="black">
                <img className="hancock" src={Hancock} />
                <img className="hancock-txt" src={HancockTxt} />
            </div>

        </footer>
    )
}