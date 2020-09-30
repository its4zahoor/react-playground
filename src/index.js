import React from "react";
import ReactDOM from "react-dom";

// import App from "./App";
import "./styles.css";
// import App from "./imageScroll";
import Timer from "./useTimer";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Timer />
  </React.StrictMode>,
  rootElement
);
