import './footer.styles.css';
import twitter from '../../../public/images/twitter.svg';
import instagram from '../../../public/images/instagram.svg';
import email from '../../../public/images/email.svg';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <h3>Cook With Me</h3>
                    <p>Bring Healthy Cooking and Joy To Your Home With Me ;)</p>
                </div>
                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#about-us">About Us</a></li>
                        <li><a href="#recipes">Recipes</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="#"><Image id='twitter' src={twitter} alt='twitter' /></a>
                        <a href="#"><Image id='instagram' src={instagram} alt='instagram' /></a>
                        <a href="#"><Image src={email} alt='email' /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Cook With Me. All Rights Reserved.</p>
            </div>
        </footer>

    )
}