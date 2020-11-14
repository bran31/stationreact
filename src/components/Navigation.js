import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light-2">
      <Link to="/">
        <div className="row">
          <div className="col" />
          <div className=" col nav-image" />
          <div className="col navbar-brand">Station 43</div>
        </div>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="container">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <Link to="/">
                <li className="nav-link">Home</li>
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/members">
                <li className="nav-link">Profiles</li>
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Seniority
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/als">
                  <li className="dropdown-item">ALS</li>{" "}
                </Link>
                <Link to="/bls">
                  <li className="dropdown-item">BLS</li>{" "}
                </Link>
                <Link to="/officers">
                  <li className="dropdown-item">Officers</li>{" "}
                </Link>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Tours
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/tour1">
                  <li className="dropdown-item">Tour 1</li>
                </Link>
                <Link to="/tour2">
                  <li className="dropdown-item">Tour 2</li>
                </Link>
                <Link to="/tour3">
                  <li className="dropdown-item">Tour 3</li>
                </Link>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Platoons
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/eplt">
                  <li className="dropdown-item">E Platoon</li>
                </Link>
                <Link to="/fplt">
                  <li className="dropdown-item">F Platoon</li>
                </Link>
                <Link to="/Dplt">
                  <li className="dropdown-item">D Platoon</li>
                </Link>
              </ul>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"></input>
            <button className="btn search-btn my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
