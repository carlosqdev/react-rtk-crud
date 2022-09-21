import React from 'react'
import { Routes, Route, Link } from "react-router-dom"

import TaskForm from './components/TaskForm'
import TasksList from './components/TasksList'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<TasksList />} />
        <Route path='/create-task' element={<TaskForm />} />
      </Routes>
    </div>
  )
}

export default App
