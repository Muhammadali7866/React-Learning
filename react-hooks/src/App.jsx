import { useRef } from 'react'
import './App.css'

function App() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus me"
        style={{ marginRight: '10px' }}
      />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default App
