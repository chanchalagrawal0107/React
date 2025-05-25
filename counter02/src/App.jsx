import { useState } from 'react'
import './App.css'

function App() {

  let[counter, setCounter] = useState(14);

  // let counter = 15;

  const addValue = () => {
    // counter++;
    
    setCounter(counter = counter+1);
    console.log("Value added", counter);
  }

  const removeValue = () => {
    setCounter(counter = counter -1);
    console.log("Value removed", counter);

  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br></br>
      <button onClick={removeValue}>Remove Value</button>
 
    </>
  )
}

export default App
