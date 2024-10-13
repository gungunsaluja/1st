import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../component/Card'

function App() {
  const [count, setCount] = useState(0)
  let myArr = [1,2,3]

  return (
    <>
   
    <Card channel = "chaiorcode" someobj = {myArr}/>
    <Card/>
      

        
    </>
  )
}

export default App
