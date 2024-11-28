import React from 'react'
import { CallToAcionBtn } from './MyButton'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-primary" href="#">Logo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ paddingLeft: '15px' }}>
                Explore
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Subject</a></li>
                <li><a className="dropdown-item" href="#">Category</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>

          <form className="d-flex justify-content-center mx-auto mb-2 mb-lg-0">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width: '350px' }} />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Link 1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Link 2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/login">Log in</a>
            </li>
            <li className="nav-item">
                <CallToAcionBtn link="/signup" label="Join For Free"/>
            
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
