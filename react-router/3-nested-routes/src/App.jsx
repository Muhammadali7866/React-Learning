import { Route, Routes } from "react-router-dom"
import { Setting } from "./components/Dashboard/Setting"
import { Dashboard} from "./components/Dashboard/Dashboard"
import { Analytics } from "./components/Dashboard/Analytics"
import {Profile}  from "./components/Dashboard/Profile"

function App() {

  return (
    <>
    <Routes>
      <Route path="dashboard" element ={<Dashboard/>} >
        <Route path="profile" element ={<Profile/>} />
        <Route path="setting" element ={<Setting/>} />
        <Route path="analytics" element ={<Analytics/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App
