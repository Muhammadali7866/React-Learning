import { useAppDispatch, useAppSelector } from "./redux/hooks"
import { decrement, increment } from "./redux/slices/counter"



function App() {
const count = useAppSelector((state)=>state.counter)

const dispatch = useAppDispatch() 
  return (
    <>
      <div>
        <h2>Counter is : {count}</h2>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
      </div>
    </>
  )
}

export default App
