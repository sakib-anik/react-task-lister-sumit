import { useState } from "react";
import AddTask from "./components/taskLister/AddTask";
import TaskList from "./components/taskLister/TaskList";
import initialTasks from "./data/tasks";
export default function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const getNextId = () => {
    return (
      tasks.reduce((prev, curr) => (prev.id > curr.id ? prev.id : curr.id)) + 1
    );
  };

  const handleAddTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: getNextId(),
        text,
        done: false,
      },
    ]);
  };

  const handleSave = (taskId, text) => {
    setTasks(
      tasks.map((task) => {
        if (task.id == taskId) {
          return {
            ...task,
            text,
          };
        } else {
          return task;
        }
      })
    );
  };

  const handleCheckBoxChange = (taskId, checked) => {
    setTasks(
      tasks.map((task) => {
        if (task.id == taskId) {
          return {
            ...task,
            done: checked,
          };
        } else {
          return task;
        }
      })
    );
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <>
      <h1>Hello World</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onSave={handleSave}
        onCheckBoxChange={handleCheckBoxChange}
        onDelete={handleDelete}
      />
    </>
  );
}
