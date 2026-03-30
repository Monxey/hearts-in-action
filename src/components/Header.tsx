import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/hia_logo.png';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className='header'>
      <div className='header-content'>
        <div className='logoContainer'>
          <Link to="/" className="link" style={{ fontSize: '1.5rem' }}>
            Hearts in Action
          </Link>
          <img src={logo} alt="Hearts in Action logo" className='logo' />
        </div>
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav${menuOpen ? ' nav-open' : ''}`}>
          <NavLink to="/" className="nav-link" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" className="nav-link" onClick={closeMenu}>About</NavLink>
          <NavLink to="/donate" className="nav-link" onClick={closeMenu}>Donate</NavLink>
          <NavLink to="/event-newsletter" className="nav-link" onClick={closeMenu}>Events</NavLink>
        </nav>
      </div>
    </header>
  );
}
