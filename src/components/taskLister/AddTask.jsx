import { useState } from "react";
import { useTaskDispatch, useTasks } from "../../contexts/TaskContextProvider";
import getNextId from "../../utils/getNextId";
export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useTaskDispatch();
  const tasks = useTasks();
  return (
    <>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button
        type="button"
        onClick={() => {
          dispatch({
            type: "added",
            text,
            id: getNextId(tasks),
          });
          setText("");
        }}
      >
        Add
      </button>
    </>
  );
}
