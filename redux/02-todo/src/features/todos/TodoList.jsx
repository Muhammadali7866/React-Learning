import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "../../App.css"
import { deleteTodo, toggleTodo } from './todoSlice';

export const TodoList = () => {
    const todos = useSelector((state)=>state.todo);
    const todoArray = Object.values(todos) 
    
    const dispatch = useDispatch();  
    const handeTodoStatus = (todoId)=>{      
      dispatch(toggleTodo({id:todoId}))
    }
    const handleDelete = (id)=>{
      dispatch(
        deleteTodo({id}))
    }
     
  return (
    <>
  <div className='w-full flex justify-center mt-10'>
    <div className='w-1/2'>
   <h2 className='text-xl font-semibold mb-4 text-center'>All Todos</h2>
   <ul className='space-y-2 '>
    {
      todoArray.map((todo)=>(
        <li className='bg-amber-100 p-3 rounded shadow flex justify-between cursor-pointer' key={todo.id} onClick={()=>handeTodoStatus(todo.id)}>
        <span className={todo.completed?'line-through text-gray-500':''}>{todo.text}</span> <span><button className='bg-amber-400 p-2 rounded-lg cursor-pointer' onClick={(e) =>{ e.stopPropagation(); handleDelete(todo.id)}}>Delete</button></span>
        </li>
      ))
    }
   </ul>
    </div>
    </div>
    </>
  )
}
