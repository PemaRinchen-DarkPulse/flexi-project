import React from "react";
import { Link } from "react-router-dom";
const NavDropdown = () => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Explore
        </a>
        <ul className="dropdown-menu">
          <li>
            <Link className="dropdown-item" to="/browseCourses">
              Browse Courses
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default NavDropdown;
