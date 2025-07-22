import { useReducer } from "react";
import AddTask from "./components/taskLister/AddTask";
import TaskList from "./components/taskLister/TaskList";
import initialTasks from "./data/tasks";
import TaskReducer from "./reducers/taskReducer";
export default function App() {
  const [tasks, dispatch] = useReducer(TaskReducer, initialTasks);

  const getNextId = () => {
    return (
      tasks.reduce((prev, curr) => (prev.id > curr.id ? prev.id : curr.id)) + 1
    );
  };

  const handleAddTask = (text) => {
    dispatch({
      type: "added",
      text,
      id: getNextId(),
    });
  };

  const handleSave = (taskId, text) => {
    dispatch({
      type: "changedText",
      text,
      id: taskId,
    });
  };

  const handleCheckBoxChange = (taskId, checked) => {
    dispatch({
      type: "changedCheckbox",
      checked,
      id: taskId,
    });
  };

  const handleDelete = (taskId) => {
    dispatch({
      type: "deleted",
      id: taskId,
    });
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
