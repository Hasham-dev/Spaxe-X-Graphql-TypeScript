import React from 'react';
import './App.css';
import MissionContainer from './components/Mission';
import MissionInfo from './components/MissionInfo';

function App() {
  const [id, setId] = React.useState(42);
  const handleIdChange = React.useCallback(newId => {
    setId(newId);
  }, []);


  return (
    <div className="AppContainer">
      <MissionContainer handleIdChange={handleIdChange} />
      <MissionInfo id={id}   />
    </div>
  );
}

export default App;
