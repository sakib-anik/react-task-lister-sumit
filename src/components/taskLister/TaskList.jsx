import { useContext } from "react";
import { TaskContext } from "../../contexts/TaskContextProvider";
import Task from "./Task";
export default function TaskList() {
  const tasks = useContext(TaskContext);
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  );
}
