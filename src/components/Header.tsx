import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { RootState } from "../app/store";

export default function Header(): JSX.Element {
  const tasks = useSelector((state: RootState) => state.tasks)

  return (
    <header>
      <h1>Task {tasks?.length}</h1>
      <Link to='/create-task'>Create Task</Link>
    </header>
  )
}