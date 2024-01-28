import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPages from './MainPages'

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
        <MainPages />
    </>
  )
}

export default App
