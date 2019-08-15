import React from "react";

// import classes from "./Navigation.module.css";

const Navigation = () => (
  <React.Fragment>
    <nav className="col-2 d-none d-md-flex w-100 px-0">
      <ul className="nav flex-column bg-light vh-100 pt-5">
        <li className="nav-item">
          <a className="nav-link text-dark text-center" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark text-center" href="/">History</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark text-center" href="/">Upload</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark text-center" href="/">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark text-center" href="/">Sign-up</a>
        </li>
      </ul>
    </nav>
  </React.Fragment>
);

export default Navigation;