import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import data from '../data/pages.json';

export default function Navbar() {

  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsHamburgerOpen(false);
  }, [location]);

  const homeName = "Hannah Dell";

  const navbarHeadings = data.filter(page => (page.isOnNavbar))

  const headingNames = (
    <ul className={`nav-headings ${isHamburgerOpen ? "nav-headings-open-hamburger" : "nav-headings-closed-hamburger"}`}>
      {navbarHeadings.map(heading => (
        <li key={heading.id} className="navbar-link-item">
          <Link 
            to={`${heading.path.toLowerCase()}`}
            alt={heading.name}
          >
            {heading.shortName}
          </Link>
        </li>
      ))}
    </ul>
  )

  return (
    <nav>
      <div className="body-container nav-content">
          <Link
            to="/"
            className="navbar-homename"
            alt="Home"
          >
            {homeName}
          </Link>

        {/* Hamburger */}
        <div className="hamburger-container">
          <button 
            className="hamburger-button"
            onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
            alt="Open Navbar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="hamburger">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Headings without hamburger */}
        <div className="headings-without-hamburger">
          {headingNames}
        </div>
      </div>

      {/* Headings with hamburger */}
      <div
        className={`headings-with-hamburger body-container ${isHamburgerOpen ? "hamburger-open" : "hamburger-closed"}`}
      >
        {headingNames}
      </div>

    </nav>
  )
}