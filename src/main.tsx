import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import Explore from './pages/Explore'

// Import all pages needed
import Main from './pages/Main'


const router = createBrowserRouter([
  {
    path : "/",
    element : <Main/>
  },
  {
    path : "/explore",
    element : <Explore/>
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
