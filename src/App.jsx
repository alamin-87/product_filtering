import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FilterData from './components/FilterData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <FilterData/>
    </>
  )
}

export default App
