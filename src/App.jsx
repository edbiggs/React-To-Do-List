import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import ToDoList from './List'




function App() {

  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <ToDoList/>

    </>
  )
}

export default App
