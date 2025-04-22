import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './Layout.jsx'
import{Home} from "./components/Home/Home"
import { About } from './components/About/About.jsx'
import "./index.css"
import { Contact } from './components/Contact/Contact.jsx'
import { User } from './components/User/User.jsx'
import GitHub, { githubInfoLoader } from './components/Github/GitHub.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"user/:userID",
        element:<User/>
      },
      {
        loader:githubInfoLoader,
        path:"github",
        element:<GitHub/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
