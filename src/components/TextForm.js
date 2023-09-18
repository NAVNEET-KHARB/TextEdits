import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");
  };
  const handleTitleClick = () => {
    let words = text.split(" ");
    let newText = words
      .map((word) => {
        let newWord = "";
        let cw = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        newWord += cw;
        return newWord;
      })
      .join(" ");
    setText(newText);
    props.showAlert("Converted to TitleCase!", "success");
  };
  const handleClearClick = () => {
    setText("");
    props.showAlert("Cleared Textarea!", "success");
  };
  const handleCopyClick = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleSpeakClick = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Cleared Extra Spaces!", "success");
  };
  let btnColor;
  let btnoutline;
  if (props.mode === "light" && props.sitecolor === null) {
    btnColor = "secondary";
    btnoutline = "border border-light";
  } else if (props.mode === "light" && props.sitecolor === "white") {
    btnColor = "secondary";
    btnoutline = "border border-light";
  } else if (props.mode === "light" && props.sitecolor === "red") {
    btnColor = "danger";
    btnoutline = "border border-light";
  } else if (props.mode === "light" && props.sitecolor === "blue") {
    btnColor = "info";
    btnoutline = "border border-light";
  } else if (props.mode === "light" && props.sitecolor === "green") {
    btnColor = "success";
    btnoutline = "border border-light";
  } else {
    btnColor = "dark";
    btnoutline = "border border-light";
  }
  const [text, setText] = useState("");
  let textcolor;
  if (props.mode === "dark") {
    textcolor = "text-white";
  }
  return (
    <>
      <div className={`container ${textcolor}`}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "#191919" : "white",
            }}
            placeholder="Enter text here"
            value={text}
            className={`form-control ${textcolor}`}
            id="myBox"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className={`btn btn-${btnColor} ${btnoutline} mx-1`} onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className={`btn btn-${btnColor} ${btnoutline} mx-1`} onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button
          className={`btn btn-${btnColor} ${btnoutline} mx-1`}
          onClick={handleTitleClick}
        >
          Convert to Titlecase
        </button>
        <button
          className={`btn btn-${btnColor} ${btnoutline} mx-1`}
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          className={`btn btn-${btnColor} ${btnoutline} mx-1`}
          onClick={handleCopyClick}
        >
          Copy Text
        </button>
        <button
          className={`btn btn-${btnColor} ${btnoutline} mx-1`}
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          className={`btn btn-${btnColor} ${btnoutline} mx-1`}
          onClick={handleSpeakClick}
        >
          Read the text
        </button>
      </div>
      <div className={`container ${textcolor} my-3`}>
        <h2>YOUR TEXT SUMMARY</h2>
        <p>
          {text.length > 0 ? text.split(" ").length : 0} words and {text.length}{" "}
          characters
        </p>
        <p>{0.008 * text.split("").length} Minutes read</p>
        <h2>TEXT PREVIEW</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter some text in the textbox above to preview it here."}
        </p>
      </div>
    </>
  );
}
