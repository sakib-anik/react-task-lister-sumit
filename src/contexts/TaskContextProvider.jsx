import { createContext, useReducer } from "react";
import initialTasks from "../data/tasks";
import TaskReducer from "../reducers/taskReducer";

export const TaskContext = createContext(null);

export const TaskDispatchContext = createContext(null);

export function TaskContextProvider({ children }) {
  const [tasks, dispatch] = useReducer(TaskReducer, initialTasks);

  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}
