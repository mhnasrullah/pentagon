import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import Error from './pages/Error'
import Explore from './pages/Explore'
import Help from './pages/Help'

// Import all pages needed
import Main from './pages/Main'
import SignIn from './pages/SignIn'


const router = createBrowserRouter([
  {
    path : "/",
    element : <Main/>
  },
  {
    path : "/explore",
    element : <Explore/>
  },
  {
    path : "/sign-in",
    element : <SignIn/>
  },
  {
    path : "/help",
    element : <Help/>
  },
  {
    path : "*",
    element : <Error/>
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
