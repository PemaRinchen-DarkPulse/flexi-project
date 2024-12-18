import React from "react";
import { JoinNowBtn } from "../button/MyButton";
import ProfileImage from "../../assets/images/courses/react.jpg";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { isAuthenticated, user, logout } = useAuth();

  const handleLogout = (e) => {
    e.preventDefault();
    logout(); // This will now handle both the logout and navigation
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand fw-bold text-primary" to="/">
          Logo
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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

          {/* Search Bar */}
          <form className="d-flex justify-content-center mx-auto mb-2 mb-lg-0">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ width: "350px" }}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

          {/* Right-Aligned Links */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            {isAuthenticated ? (
              <>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle d-flex align-items-center gap-2"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src={user?.profileImage || ProfileImage}
                      alt="Profile"
                      className="rounded-circle"
                      style={{ width: "32px", height: "32px", objectFit: "cover" }}
                    />
                    <span>{user?.name || "User"}</span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <Link className="dropdown-item" to="/dashboard">
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/my-courses">
                        My Courses
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/settings">
                        Settings
                      </Link>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <button 
                        className="dropdown-item text-danger" 
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </li>
              </>
            ) : (
              <div className="d-flex align-items-center gap-2">
                <li className="nav-item">
                  <Link className="nav-link active" to="/login">
                    Log In
                  </Link>
                </li>
                <li className="nav-item">
                  <JoinNowBtn link="/signup" label="Join For Free" />
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
