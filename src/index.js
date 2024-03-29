import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { index } from "./store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={index}>
    <Router>
      <App />
    </Router>
  </Provider>
);

// If you want to start measuring performance in your index, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
