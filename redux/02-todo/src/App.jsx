import { useState } from 'react'
import './App.css'
import { TodoList } from './features/todos/TodoList'
import { useDispatch } from 'react-redux'
import { addTodo } from './features/todos/todoSlice'

function App() {
  const [todoText, settodoText] = useState('')
  const dispatch = useDispatch()
  const addTodoText = (e)=>{
    e.preventDefault(); // prevent default form submit

    if(todoText.trim() == '') return;    
    dispatch(addTodo({text:todoText}));
    
    settodoText('')
  }
  return (
    <>
    <div className='h-screen bg-gray-600'>

    <div className='flex  justify-center p-5'>
        <div className='p-5 bg-gray-400 rounded-lg'>
          {/* Input field for todo */}
          <form onSubmit={addTodoText} >

          <input
            type="text"
            className="p-2 border rounded-md mb-3"
            placeholder="Enter a todo..."
            value={todoText}
            onChange={(e)=>settodoText(e.target.value)}
            />
          {/* Button to add todo */}
          <button className='bg-blue-500 text-white p-2 rounded-md' type='submit'>
            Add
          </button>
            </form>
        </div>
      </div>
      <TodoList/>
      </div>
    </>
  )
}

export default App
