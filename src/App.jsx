import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPages from './MainPages'
// import MainPagesSeparates from './MainPagesSeparates'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <ToastContainer autoClose={2000} />
        {/* <MainPagesSeparates /> */}
        <MainPages />
    </>
  )
}

export default App
