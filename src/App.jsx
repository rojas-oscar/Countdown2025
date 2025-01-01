import { useState } from 'react'
import './App.css'
import CountdownTo2025 from './components/CountdownTo2025'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CountdownTo2025 />
    </>
  )
}

export default App
