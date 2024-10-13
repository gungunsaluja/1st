import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // usestate ke change ko propagate kiya jata h aapke ui ke andr
  let [counter,setCounter]=useState(15)
  // const [count, setCount] = useState(0)
  
  const addValue = ()=>{
    console.log("clicked",counter);
    // count = count+1
    if(counter<20)
    setCounter(counter+1);
  else{
    setCounter(0);
  }
  }
  const removeval = ()=>{
    console.log("Clicked",counter);
    if(counter>0){
    setCounter(counter-1);
    }
  else{

  counter = 0;
  }
  }


  return (
    <>
      <h1>Chai or react</h1>
      <h2>counter value</h2>
      <br/>

      <button onClick={addValue}> Add value</button>
      <p>{counter}</p>
      <button onClick = {removeval}>remove Value</button>
    </>
  )
}

export default App
