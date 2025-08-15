import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import data from '../data/pages.json';

export default function Navbar({ darkMode, toggleDarkMode }) {

  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsHamburgerOpen(false);
  }, [location]);

  const homeName = "Hannah Dell";

  const navbarHeadings = data.filter(page => (page.isOnNavbar)).sort((a, b) => a.order - b.order);

  const headingNames = (
    <ul className={`nav-headings ${isHamburgerOpen ? "nav-headings-open-hamburger" : "nav-headings-closed-hamburger"}`}>
      {navbarHeadings.map(heading => (
        <li key={heading.id} className="navbar-link-item">
          <NavLink 
            to={`${heading.path.toLowerCase()}`}
            className={navData => navData.isActive ? "navbar-active navbar-heading navbar-item": "navbar-heading navbar-item"}
            alt={heading.name}
          >
            {heading.shortName}
          </NavLink>
        </li>
      ))}
    </ul>
  )

  return (
    <nav>
      <div className="body-container nav-content">
        <NavLink
          to="/"
          className="navbar-homename navbar-item"
          alt="Home"
        >
          {homeName}
        </NavLink>

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
        <div>
        <div className="headings-without-hamburger">
          {headingNames}
        </div>
        </div>

        {/* Dark Mode Button */}
        <button
          className="darkmode-button"
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
        </button>
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