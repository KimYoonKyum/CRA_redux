import React from 'react';
import './App.css';
import CustomRoute from './menu/CustomRoute'
import {useHistory} from 'react-router-dom'

function App() {
  const history = useHistory()
  const onBack = () => history.goBack()
  const onHome = () => history.push('/')

  return (
    <div className="App flex col">
      <div className="flex row">
        <button onClick={onBack}>{'뒤로가기'}</button>
        <button onClick={onHome}>{'홈으로 가기'}</button>
      </div>
      <CustomRoute />
    </div>
  );
}

export default App;
