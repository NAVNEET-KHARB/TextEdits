import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

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
          <a className={`navbar-brand ${textcolor}`} href="#">
            {props.title}
          </a>
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
                <a
                  className={`nav-link active ${textcolor}`}
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${textcolor}`} href="#">
                  {props.about}
                </a>
              </li>
            </ul>
            <div
              className="btn-group"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio1"
                autocomplete="off"
                onClick={props.toggleSiteColorw}
              />
              <label
                className={`btn btn-outline-primary ${textcolor}`}
                htmlFor="btnradio1"
              >
                White
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio2"
                autocomplete="off"
                onClick={props.toggleSiteColorr}
              />
              <label
                className={`btn btn-outline-primary ${textcolor}`}
                htmlFor="btnradio2"
              >
                Red
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio3"
                autocomplete="off"
                onClick={props.toggleSiteColorb}
              />
              <label
                className={`btn btn-outline-primary ${textcolor}`}
                htmlFor="btnradio3"
              >
                Blue
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio4"
                autocomplete="off"
                onClick={props.toggleSiteColorg}
              />
              <label
                className={`btn btn-outline-primary ${textcolor}`}
                htmlFor="btnradio4"
              >
                Green
              </label>
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
                htmlhtmlFor="flexSwitchCheckDefault"
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
