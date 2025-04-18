import React from 'react'
import { useNavigate } from 'react-router-dom'

export const About = () => {
  const navigate = useNavigate()
  const handleHome = ()=>{
    navigate("/")
  }
    return (
<>
    <div>About</div>
    <button onClick={handleHome}>GO HOME</button>
</>
  )
}
