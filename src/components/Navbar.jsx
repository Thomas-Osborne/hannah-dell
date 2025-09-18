import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import pageData from '../data/pages.json';
import courseData from '../data/courses.json';

export default function Navbar() {

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
        <div className="headings-without-hamburger">
          {navbarHeadings}
        </div>
      </div>

      {/* Headings with hamburger */}
      <div
        className={`headings-with-hamburger body-container ${isHamburgerOpen ? "hamburger-open" : "hamburger-closed"}`}
      >
        {navbarHeadings}
      </div>

    </nav>
  )
}