import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes/routes';
let router = createBrowserRouter(routes)
import './App.css'

function App() {


  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
