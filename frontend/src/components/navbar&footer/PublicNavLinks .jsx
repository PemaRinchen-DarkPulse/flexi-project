import React from "react";
import { JoinNowBtn } from "../button/MyButton";
import { Link } from "react-router-dom";
const PublicNavLinks = () => {
  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
      <div className="d-flex align-items-center gap-2">
        <li className="nav-item">
        <Link className="nav-link" to="/explore-courses">
        Courses
      </Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/practice-test">
        Practice Tests
      </Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/mock-tests">
        Mock Tests
      </Link>
        </li>
      </div>
    </ul>
  );
};
export default PublicNavLinks;