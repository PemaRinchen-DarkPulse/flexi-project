import React from "react";
import { Link } from "react-router-dom";
import { JoinNowBtn } from "../button/MyButton";
const UnauthenticatedNavLinks = () => {
  return (
    <div className="d-flex align-items-center gap-2">
      <li className="nav-item">
        <Link className="dropdown-item" to="/login">
        Log In
        </Link>
      </li>
      <li className="nav-item">
        <JoinNowBtn link="/signup" label="Join For Free" />
      </li>
    </div>
  );
};

export default UnauthenticatedNavLinks;
