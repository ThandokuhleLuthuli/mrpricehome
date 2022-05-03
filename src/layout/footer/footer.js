import React from 'react';
import Facebook from '../../assets/images/facebook-round.svg'
import Instagram from '../../assets/images/black-instagram.svg'
import twitter from '../../assets/images/twitter.svg'
import youtube from '../../assets/images/youtube.svg'

function Form() {
    return (
        <footer className="footer">
            <div className="container">
                <ul className="footer-icons">
                    <li><img src={Facebook} alt="facebook"/></li>
                    <li><img src={Instagram} alt="instagram"/></li>
                    <li><img src={twitter} alt="twitter"/></li>
                    <li><img src={youtube} alt="youtube"/></li>
                </ul>
                <p className="footer-copy">Follow us <strong>@mrp_home</strong></p>

            </div>
        </footer>
    )
}

export default Form;