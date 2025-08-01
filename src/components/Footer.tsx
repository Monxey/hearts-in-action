import './Footer.css';
import logo from '../assets/hia_logo.png';
import Instagram from '../assets/instagram.png'
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo and Org Info */}
        <div className="footer-left">
          <div className='title'>
            <img src={logo} alt="Hearts in Action logo" className="logo" />
            <h2>Hearts in Action</h2>
          </div>  
          <p className="description">
            Fighting food and material insecurity in the UMD community through student-led initiatives.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <h3>Get Involved</h3>
          <ul>
            <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSd6an51-ZwG-ECVu6EZjxhaqs5CFYUOHxMBwW6c4P9KbUDc1A/viewform?fbclid=PAZXh0bgNhZW0CMTEAAafYZR3yFbKsiGBYyKinROG9mZMdK5NcPPQp-XY7oI2LvQPvq0SfG4eTXohVEw_aem_2IUtKpN5uYV4VQC8uQB82w" target="_blank" rel="noopener noreferrer">Volunteer</a></li>
            <li><NavLink to="/resources">Resources</NavLink></li>
            <li><NavLink to="/newsletter">Newsletter</NavLink></li>
            <li><NavLink to="/events">Events</NavLink></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3>Connect</h3>
          <ul>
            <li>
              <a href="https://www.instagram.com/umd.hia/" target="_blank" rel="noopener noreferrer">
                <img src={Instagram} alt='Instagram' style={{width:'2rem', height:'2rem'}}/>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Hearts in Action. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
