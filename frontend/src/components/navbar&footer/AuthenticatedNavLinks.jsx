import React from "react";
import { useAuth } from "../../context/AuthContext";
import ProfileImage from "../../assets/images/courses/react.jpg";
import { Link } from "react-router-dom";

const AuthenticatedNavLinks = () => {
  const { user, logout } = useAuth();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
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
          style={{
            width: "32px",
            height: "32px",
            objectFit: "cover",
          }}
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
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a className="dropdown-item" href="#" onClick={handleLogout}>
            Logout
          </a>
        </li>
      </ul>
    </li>
  );
};

export default AuthenticatedNavLinks;
