import React from "react";
import "./App.css";
import CustomRoute from "./menu/CustomRoute";
import LeftNav from "./menu/LeftNav";
import "./communication/index";

function App() {
  return (
    <div className="App flex flex-one vbox">
      <LeftNav />
      <CustomRoute />
    </div>
  );
}

export default App;
