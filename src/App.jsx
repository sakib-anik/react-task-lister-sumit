import AddTask from "./components/taskLister/AddTask";
import TaskList from "./components/taskLister/TaskList";
import { TaskContextProvider } from "./contexts/TaskContextProvider";
export default function App() {
  return (
    <>
      <TaskContextProvider>
        <h1>Hello World</h1>
        <AddTask />
        <TaskList />
      </TaskContextProvider>
    </>
  );
}
