import React from 'react';
import './App.css';
import CustomRoute from './menu/CustomRoute'
import {useHistory} from 'react-router-dom'

function App() {
  const history = useHistory()
  const onBack = () => {
    history.goBack()
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={onBack}>{'뒤로가기'}</button>
        <CustomRoute />
      </header>
    </div>
  );
}

export default App;
