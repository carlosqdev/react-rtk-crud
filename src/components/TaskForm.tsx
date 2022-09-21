import React, { useState, FormEvent, SyntheticEvent } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid'
import { useNavigate } from 'react-router-dom'

import { addTask } from "../features/tasks/taskSlice"

export default function TaskForm(): JSX.Element {
  const [task, setTask] = useState({
    title: '',
    description: ''
  })

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = event.currentTarget
    setTask({ ...task, [name]: value })
  }

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    dispatch(addTask({
      ...task,
      id: uuid()
    }))
    navigate("/")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name='title' onChange={handleChange} type="text" placeholder='title'/>

      <textarea name="description" onChange={handleChange} placeholder='description'></textarea>

      <button type="submit">Save</button>
    </form>
  )
}