import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-section">
                    <h3>Lost & Found</h3>
                    <p>
                        A smart and reliable platform that helps students report lost items,
                        discover found belongings, and reconnect with their owners quickly and securely.
                    </p>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>📍 USIU Africa, Nairobi</p>
                    <p>📧 support@lostandfound.com</p>
                    <p>📞 +254 718480954</p>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2026 Lost & Found | Built by Gabriel</p>
            </div>

        </footer>
    );
}

export default Footer;