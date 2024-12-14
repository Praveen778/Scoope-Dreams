import { useEffect, useState } from 'react'


import './App.css'
import Landingpage from './Tailwindblock/Pages/Landingpage'

function App() {

  const [theme, setTheme] = useState('light')

  useEffect(()=>{
    
 if(theme==='dark'){
  document.documentElement.classList.add("dark")
 }
 else{
  document.documentElement.classList.remove("dark")
 }

  },[theme])

  const handleThemeChange=()=>{
    setTheme(theme==="light"?"dark":"light")
  }

  return (
    <div>
      <Landingpage change={handleThemeChange} />
    </div>
  )
}

export default App
