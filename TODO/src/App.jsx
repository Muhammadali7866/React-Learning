import { useState } from 'react'
import './App.css'

function App() {
const [items, setItems] = useState([])
const [inputValue, setInputValue] = useState('')
const [text, setText] = useState('')
const [editingIndex, setEditingIndex] = useState(null)
const addItem = () => {
  if (inputValue.trim() === '') return // Prevent adding empty items
  setItems([...items, inputValue])
  setInputValue('') // Clear input field after adding
}
const deleteItem = (index) => {
  const newItems = [...items]
  newItems.splice(index,1)
  setItems(newItems)
}

const handleEdit = (index)=>{
  setEditingIndex(index);
  setText(items[index])
}

const handleUpdateText = (index) =>{
  if(text.trim() !== ''){
    const updatedItems = [...items];
    updatedItems[index] = text;
    setItems(updatedItems);
    setText('')
    setEditingIndex(null)
  }
}
  return (
    <>
  <main className="h-screen flex items-center justify-center bg-sky-900">
  <div className="border-2 rounded-lg w-[600px] max-h-[80vh] overflow-y-auto bg-sky-950 border-sky-950 p-4">
    <h2 className="text-white text-3xl flex items-center justify-center mt-2 font-bold">ToDo</h2>

    <div className="bg-sky-900 w-[300px] h-[40px] flex items-center justify-center mx-auto mt-4 space-x-2 px-2 rounded shadow">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border border-blue-500 rounded px-2 py-1 text-sm"
      />
      <button
        onClick={addItem}
        className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
      >
        ADD
      </button>
    </div>

    <ul className="text-white mt-2 space-y-2 flex items-center justify-center flex-col">
      {items.map((item, index) => (
        <li key={index} className="flex justify-between items-center w-[300px] mt-[20px] px-2 py-1 bg-sky-800 rounded-sm border border-gray-500">
          {editingIndex === index ? (
            <>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 text-sm text-black"
              />
              <button
                onClick={() => handleUpdateText(index)}
                className="bg-green-500 text-white px-2 py-1 rounded text-sm"
              >
                Save
              </button>
            </>
          ) : (
            <>
           <span className="text-white flex-1">{item}</span>
           <div className="flex space-x-2">
        <button
          onClick={() => handleEdit(index)}
          className="bg-yellow-500 text-white px-2 py-1 rounded text-sm"
        >
          Edit
        </button>
        <button
          onClick={() => deleteItem(index)}
          className="bg-red-500 text-white px-2 py-1 rounded text-sm"
        >
          Delete
        </button>
      </div>
            </>
          )}
        </li>
      ))}
    </ul>
  </div>
</main>


   </>
)}



export default App
