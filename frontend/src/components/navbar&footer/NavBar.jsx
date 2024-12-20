import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import PublicNavLinks from "./PublicNavLinks ";
import NavDropdown from "./NavDropdown";
import UnauthenticatedNavLinks from "./UnauthenticatedNavLinks";
import AuthenticatedNavLinks from "./AuthenticatedNavLinks";

const NavBar = () => {
  const { isAuthenticated } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-primary" to="/">
          Logo
        </Link>
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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <NavDropdown />
          <SearchForm />
          <PublicNavLinks />
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            {isAuthenticated ? (
              <AuthenticatedNavLinks />
            ) : (
              <UnauthenticatedNavLinks />
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
