import "./App.css";
import React, { useState } from "react";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [sitecolor, setSiteColor] = useState(null);
  const [alert, setAlert] = useState(null);
  if (sitecolor === null) {
    document.body.style.backgroundColor = "#F2F2F2";
  }
  const toggleSiteColorw = () => {
    setSiteColor("white");
    document.body.style.backgroundColor = "#F2F2F2";
    if (mode === "dark") {
      document.body.style.backgroundColor = "#2F2F2F";
    }
  };
  const toggleSiteColorr = () => {
    setSiteColor("red");
    document.body.style.backgroundColor = "#FC2947";
    if (mode === "dark") {
      document.body.style.backgroundColor = "#571010";
    }
  };
  const toggleSiteColorb = () => {
    setSiteColor("blue");
    document.body.style.backgroundColor = "#4ae2ed";
    if (mode === "dark") {
      document.body.style.backgroundColor = "#161b4a";
    }
  };
  const toggleSiteColorg = () => {
    setSiteColor("green");
    document.body.style.backgroundColor = "#A6FF00";
    if (mode === "dark") {
      document.body.style.backgroundColor = "#144d29";
    }
  };
  const valueOfAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2F2F2F";
      valueOfAlert("DARK MODE has been enabled.", "success");
      //   setInterval(() => {
      //     document.title = "TextEdits is amazing."
      //   }, 2000);
      //   setInterval(() => {
      //     document.title = "Install TextEdits now."
      //   }, 750);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#F2F2F2";
      valueOfAlert("LIGHT MODE has been enabled.", "success");
    }
  };
  return (
    <>
    {/* // <Router> */}
      <Navbar
        title="TextEdit"
        about="About Us"
        sitecolor={sitecolor}
        toggleSiteColorw={toggleSiteColorw}
        toggleSiteColorr={toggleSiteColorr}
        toggleSiteColorb={toggleSiteColorb}
        toggleSiteColorg={toggleSiteColorg}
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
       <div className="container my-3">
       <TextForm
              showAlert={valueOfAlert}
              heading="Enter the text to analyze below"
              mode={mode}
              sitecolor={sitecolor}
            />
        {/* <Routes> */}
          {/* <Route exact path="/about" element = {<About mode={mode} />}/>
          <Route exact path="/" element={<TextForm
              showAlert={valueOfAlert}
              heading="Enter the text to analyze below"
              mode={mode}
              sitecolor={sitecolor} */}
            {/* />}/> */} 
        {/* </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
