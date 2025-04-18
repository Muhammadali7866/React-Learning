
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import { About } from './components/About'
import { Contact } from './components/Contact'

function App() {

  return (
    <>
     <BrowserRouter>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/about" style={{ marginRight: 10 }}>About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
