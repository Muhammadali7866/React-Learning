
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import {About} from './components/About'
import { Contact } from './components/Contact'

function App() {

  return (
    <>
     <nav>
      <NavLink to="/" style={({isActive,isPending})=>({
        fontWeight:isActive?"bold":"normal",
        marginRight:"10px",
        color:isPending?"red":"black",
        
      })} >
      Home
      </NavLink>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
     </nav>
     <Routes>
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
     </Routes>
    </>
  )
}

export default App
