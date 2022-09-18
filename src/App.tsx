import React from 'react'
import type { RootState } from './app/store'
import {  useSelector } from "react-redux"
import TaskForm from './components/TaskForm'
import TasksList from './components/TasksList'

function App() {
  const tasksState = useSelector((state: RootState) => state.tasks)

  console.log(tasksState)
  return (
    <div>
      <TaskForm />
      <TasksList />
    </div>
  )
}

export default App
