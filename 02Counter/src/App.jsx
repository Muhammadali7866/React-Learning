import { useState } from 'react'
import './App.css'

function App() {
const [count,updateCount] = useState(0)
const addValue = () => {
  updateCount(count+1)
}
const removeValue = () => {
  updateCount(count-1)
}
  return (
    <>
    <h1>counter project</h1>
    <p>{count}</p>
    <button onClick={addValue}>Add value</button><br></br>
    <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
