import React from 'react'
import './App.scss'
import GameBoard from './components/GameBoard/GameBoard'
import LeaderBoardContainer from './components/LeaderBoard/LeaderBoardContainer'

function App() {
  return (
    <div className="app">
      <GameBoard />
      <LeaderBoardContainer />
    </div>
  );
}

export default App;
