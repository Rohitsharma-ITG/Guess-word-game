import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Guess from './component/Guess'

function App() {
  const [officeMode, setOfficeMode] = useState(false)


  return (
    <div className={officeMode ? "night" : "day"}>
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
      <Guess />
    </div>
  )
}

export default App
