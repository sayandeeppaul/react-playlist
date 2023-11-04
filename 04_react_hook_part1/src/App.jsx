import './App.css'
import { useState } from 'react';

function App() {
  let [value,setValue] = useState(0);

  function decrease() {
    value = value-1
    setValue(value)
  }
  function increase() {
    value = value+1
    setValue(value)
  }
  return (
      <div className='parent'>
        <h1>Counter App</h1>
        <h2>Counter Value : {value}</h2>
        <button onClick={decrease}>Decrease</button>
        <button onClick={increase}>Increase</button>
      </div>
  )
}

export default App
