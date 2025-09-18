import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import pageData from '../data/pages.json';
import courseData from '../data/courses.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsHamburgerOpen(false);
  }, [location]);

  const homeName = "Hannah Dell";

  const pageHeadings = pageData.
    filter(page => (page.isOnNavbar))
    .sort((a, b) => a.order - b.order);
  
  const courseHeadings = courseData
    .filter(course => 
      course.isOnNavbar &&
      course.lectures &&
      course.lectures.path
    )
    .sort((a, b) => a.order - b.order);

    const generateNavLinks = (headings, isCourse = false) => (
      headings.map(heading => {
        const path = isCourse
          ? heading.lectures?.path
          : heading.path;

        return (
          <li key={heading.id} className="navbar-link-item">
            <NavLink
              to={`/${isCourse ? `courses/${path.toLowerCase()}` : path.toLowerCase()}`}
              end // so that Courses and Course Page don't both bold at "/courses/course-name"
              className={navData =>
                navData.isActive
                  ? "navbar-active navbar-heading navbar-item"
                  : "navbar-heading navbar-item"
              }
              alt={heading.name}
            >
              {heading.shortName}
            </NavLink>
          </li>
        );
      })
    );
  
  const navbarHeadings = (
    <ul className={`nav-headings ${isHamburgerOpen ? "nav-headings-open-hamburger" : "nav-headings-closed-hamburger"}`}>
      {generateNavLinks(pageHeadings)}
      {generateNavLinks(courseHeadings, true)}
    </ul>
  );

  return (
    <nav>
      <div className="body-container nav-content">
        {/* Left: site name */}
        <NavLink
          to="/"
          className="navbar-homename navbar-item"
          alt="Home"
        >
          {homeName}
        </NavLink>

        <div className="headings-without-hamburger">{navbarHeadings}</div>

        <div className="navbar-utils">
          {/* Hamburger (mobile only) */}
          <button
            className="hamburger-button"
            onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
            aria-label="Open Navbar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="hamburger"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Dark mode button */}
          <button
            className="darkmode-button"
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
          </button>
        </div>
      </div>

      {/* Hamburger headings */}
      <div
        className={`headings-with-hamburger body-container ${
          isHamburgerOpen ? "hamburger-open" : "hamburger-closed"
        }`}
      >
        {navbarHeadings}
      </div>
    </nav>
  );
}
