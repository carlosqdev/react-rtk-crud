import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import type { RootState } from '../app/store'
import { deleteTask } from "../features/tasks/taskSlice"
import Header from './Header'

export default function TasksList(): JSX.Element {
  const stateTasks = useSelector((state: RootState) => state.tasks)
  const dispatch = useDispatch()

  const handleDelete = (id: string) => {
    dispatch(deleteTask(id))
  }
  return (
    <>
      <Header />
      <ul>
        {stateTasks?.map(({ id, title, description, completed }) => (
          <li key={id}>
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={() => handleDelete(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}