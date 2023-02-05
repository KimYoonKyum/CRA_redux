import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import {List} from "./features/list/List";
import {User} from './features/user/User'
import {BrowserRouter as Router, Route, useLocation} from 'react-router-dom'
import {MenuSchema} from './menu/MenuSchema'
import CustomRoute from './menu/CustomRoute'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <CustomRoute />
        </header>
      </div>
    </Router>
  );
}

export default App;
