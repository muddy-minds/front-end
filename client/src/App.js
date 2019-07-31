import React from 'react';
import './App.sass';
import Data from './comp/Data'
import GameDisplay from './comp/UserVeiw/GameDisplay'

function App() {
  return (
    <>
    <div className="display">
    <GameDisplay />
    </div>
    </>
  );
}

export default App;
