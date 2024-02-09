import React, { Component } from "react";
import newsMonk from "./newsMonk.png"
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between">
          <div className="container-fluid ">
            <Link className="navbar-brand" to="/">
            <img src={newsMonk} alt="Logo" width="50" height="50" className="d-inline-block align-text-top" />
            </Link>
            <span><b style={{fontFamily: `'Protest Revolution', sans-serif`}}>News Monk</b></span>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item text-center">
                  <Link disabled className="nav-link active" aria-current="page" to="/">
                    <b></b>
                  </Link>
                </li>
                <li className="nav-item text-center">
                  <Link className="nav-link active" aria-current="page" to="/business">
                    <b>Business</b>
                  </Link>
                </li>
                <li className="nav-item text-center">
                  <Link className="nav-link active" aria-current="page" to="/entertainment">
                    <b>Entertainment</b>
                  </Link>
                </li>
                 
                <li className="nav-item text-center">
                  <Link className="nav-link active" aria-current="page" to="/health">
                    <b>Health</b>
                  </Link>
                </li>
                <li className="nav-item text-center">
                  <Link className="nav-link active" aria-current="page" to="/science">
                    <b>Science</b>
                  </Link>
                </li>
                <li className="nav-item text-center">
                  <Link className="nav-link active" aria-current="page" to="/sports">
                    <b>Sports</b>
                  </Link>
                </li>
                <li className="nav-item text-center">
                  <Link className="nav-link active" aria-current="page" to="/technology">
                    <b>Technology</b>
                  </Link>
                </li>
              </ul>
              
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
