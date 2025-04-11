
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [isNumbers, setIsNumber] = useState(false);
  const [isCharacter,setIsCharchter] = useState(false)
  const [rangeValue,setRangeValue] = useState(0)
  const [password,setPassword] = useState('')

  const inputRef = useRef(0);


  useEffect(()=>{
    let i=0;
    let charString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(isNumbers) charString +='0123456789'
    if(isCharacter) charString +='!@#$%^&*()_+-=[]{}|;:,.<>?'    
    let generatedPassword = ''
    while (i<rangeValue){
      generatedPassword += charString[Math.floor(Math.random() * charString.length)]
      i++;
    }
    setPassword(generatedPassword)

  },[rangeValue,isCharacter,isNumbers])


  const handleCopy = ()=>{
    const text = inputRef.current;
    text.select(); // highlights the text

    navigator.clipboard.writeText(text)
  }

  return (
    <>
      <div className='bg-gray-950 h-screen flex justify-center pt-20'>

        <div className="w-[800px] h-[180px] flex flex-col gap-5 p-10 rounded-xl bg-gray-900 ">
          <div>
            <input type="text" className='w-[500px] bg-white p-3 rounded-l-xl' value={password} ref={inputRef} />
            <button className='bg-blue-700 p-3 rounded-r-xl w-[80px] cursor-pointer' onClick={handleCopy}>copy</button>
          </div>
          <div className='flex justify-start gap-5' >
          <input type="range" min="0" max="25" value={rangeValue} onChange={(e)=>setRangeValue(e.target.value)}/>
          <h2 className='text-yellow-700 font-bold text-xl'>Length ({rangeValue})</h2>
            <label class="inline-flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500" checked={isNumbers} onClick={(e)=>setIsNumber(e.target.checked)} />
              <span class="text-yellow-700 font-bold text-xl">Numbers</span>
            </label>
            <label class="inline-flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500" checked={isCharacter} onClick={(e)=>setIsCharchter(e.target.checked)}  />
              <span class="text-yellow-700 font-bold text-xl">Characters</span>
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
