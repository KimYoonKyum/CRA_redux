import React from 'react';
import './App.css';
import CustomRoute from './menu/CustomRoute'
import {useHistory} from 'react-router-dom'
import {Button} from "@mui/material";
import LeftNav from "./menu/LeftNav";

function App() {

  return (
    <div className="App flex col">
      <LeftNav />
      <div className="flex row">
      </div>
      <CustomRoute />
    </div>
  );
}

export default App;
