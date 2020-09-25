import React from 'react';
import './App.css';
import MissionContainer from './components/Mission';
import MissionInfo from './components/MissionInfo';

function App() {
  return (
    <div className="AppContainer">
      <MissionContainer />
      <MissionInfo />
    </div>
  );
}

export default App;
