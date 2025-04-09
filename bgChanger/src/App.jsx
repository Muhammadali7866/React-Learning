import { useState } from 'react'
import './App.css'

function App() {
const [color,setColor]  = useState('gray')

const updateBackgroundColor = (bg)=>{
  setColor(bg)
}
  return (
    <>
    <div style={{backgroundColor:color}} className='h-screen flex justify-center items-end p-[50px]'>
      <div className='p-3 bg-white flex justify-center items-center gap-[50px] w-[900px] rounded-2xl'>
        <button className='px-5 py-2 rounded-lg bg-red-600 text-white cursor-pointer hover:scale-95 transition-all duration-150' onClick={()=>updateBackgroundColor("red")}>Red</button>
        <button className='px-5 py-2 rounded-lg bg-blue-600 text-white cursor-pointer' onClick={()=>updateBackgroundColor("blue")}>Blue</button>
        <button className='px-5 py-2 rounded-lg bg-green-600 text-white cursor-pointer' onClick={()=>updateBackgroundColor("green")}>Green</button>
        <button className='px-5 py-2 rounded-lg bg-black text-white cursor-pointer' onClick={()=>updateBackgroundColor("black")}>Black</button>
        <button className='px-5 py-2 rounded-lg bg-purple-800 text-white cursor-pointer' onClick={()=>updateBackgroundColor("purple")}>Purpule</button>
        <button className='px-5 py-2 rounded-lg bg-yellow-300 text-white cursor-pointer' onClick={()=>updateBackgroundColor("yellow")}>Yellow</button>
        <button className='px-5 py-2 rounded-lg bg-gray-800 text-white cursor-pointer' onClick={()=>updateBackgroundColor("gray")}>Gray</button>


      </div>
    </div>
    </>
  )
}

export default App
