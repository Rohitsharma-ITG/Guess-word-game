import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Guess from './component/Guess'
import MemoryGame from './component/MemoryGame'
import SnakeGame from './component/SnakeGame'

function App() {
  const [officeMode, setOfficeMode] = useState(false)
  const [game, setGame] = useState("guess")


  return (
    <div className={officeMode ? "night" : "day"}>
      <div className="outer-right">
        <div className="toggle-btn">
          <label className="switch">
            <input
              type="checkbox"
              checked={officeMode}
              onChange={() => setOfficeMode(v => !v)}
            />
            <span className="slider"></span>
          </label>
          <span className="mode-label">
            Office Mode
          </span>
        </div>
        <select
          name="stage"
          value={game}
          onChange={(e) => setGame(e.target.value)}
        >
          <option value="guess">Guess the Word</option>
          <option value="memory">Memory Game</option>
          <option value="snake">Snake Game</option>
        </select>
      </div>
      {
        (game == "guess") ? <Guess /> : (game == "memory") ? <MemoryGame /> : <SnakeGame />
      }


    </div>
  )
}

export default App
