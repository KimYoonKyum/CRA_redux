import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import {List} from "./features/list/List";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <List />
      </header>
    </div>
  );
}

export default App;
