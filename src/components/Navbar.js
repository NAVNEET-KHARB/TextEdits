import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  let textcolor = "text-body-emphasis";
  let radTxt = "LIGHT";
  let navColor = "light";
  if (props.mode === "light" && props.sitecolor === null) {
    navColor = "light";
    textcolor = "text-body-emphasis";
    radTxt = "DARK";
  } else if (props.mode === "light" && props.sitecolor === "white") {
    navColor = "light";
    textcolor = "text-body-emphasis";
    radTxt = "DARK";
  } else if (props.mode === "light" && props.sitecolor === "red") {
    navColor = "danger";
    textcolor = "text-body-emphasis";
    radTxt = "DARK";
  } else if (props.mode === "light" && props.sitecolor === "blue") {
    navColor = "primary";
    textcolor = "text-body-emphasis";
    radTxt = "DARK";
  } else if (props.mode === "light" && props.sitecolor === "green") {
    navColor = "success";
    textcolor = "text-body-emphasis";
    radTxt = "DARK";
  } else if (props.mode === "dark" && props.sitecolor === null) {
    navColor = "dark";
    textcolor = "text-white";
    radTxt = "LIGHT";
    document.body.style.backgroundColor = "#2F2F2F";
  } else {
    navColor = "dark";
    textcolor = "text-white";
    radTxt = "LIGHT";
  }
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${navColor}`}>
        <div className="container-fluid">
          <Link className={`navbar-brand ${textcolor}`} to="/">
            {props.title}
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link active ${textcolor}`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${textcolor}`} to="/about">
                  {props.about}
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <div className="form-check">
                <input
                  className="form-check-input mx-1"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  onClick={props.toggleSiteColorw}
                />
                <label
                  className={`form-check-label ${textcolor}`}
                  htmlFor="flexRadioDefault1"
                >
                  White
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input mx-1"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  onClick={props.toggleSiteColorr}
                />
                <label
                  className={`form-check-label ${textcolor}`}
                  htmlFor="flexRadioDefault2"
                >
                  Red
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input mx-1"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                  onClick={props.toggleSiteColorb}
                />
                <label
                  className={`form-check-label ${textcolor}`}
                  htmlFor="flexRadioDefault3"
                >
                  Blue
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input mx-1"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault4"
                  onClick={props.toggleSiteColorg}
                />
                <label
                  className={`form-check-label ${textcolor}`}
                  htmlFor="flexRadioDefault4"
                >
                  Green
                </label>
              </div>
            </div>
            <div className="form-check form-switch">
              <input
                onClick={props.toggleMode}
                className="form-check-input mx-1"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className={`form-check-label ${textcolor}`}
                htmlFor="flexSwitchCheckDefault"
              >
                Enable {radTxt} MODE
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};
Navbar.defaultProps = {
  title: "Set title here",
  about: "Set about text here",
};
