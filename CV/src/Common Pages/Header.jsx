import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Header.css'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light px-4 py-3">
      <div className="container-fluid">
        {/*Left side */}
        <div className="d-flex align-items-center">
          <div className="circle me-2"></div>
          <Link to="/" className="navbar-brand fw-bold fs-5">
            Hetavi Desai
          </Link>
        </div>

        {/* Toggler (for mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <div className="navbar-nav d-flex align-items-center gap-3">
            <Link to="/resume" className="nav-link">Resume</Link>
            <div className="vr d-none d-lg-block"></div>
            <Link to="/projects" className="nav-link">Projects</Link>
            <div className="vr d-none d-lg-block"></div>
            <Link to="/contact" className="nav-link pe-lg-4">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
