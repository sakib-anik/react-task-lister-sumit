import { useState } from "react";
import { useTaskDispatch } from "../../contexts/TaskContextProvider";
export default function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.text);
  const dispatch = useTaskDispatch();
  let content;
  if (isEditing) {
    content = (
      <>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="button"
          onClick={() => {
            dispatch({
              type: "changedText",
              text,
              id: task.id,
            });
            setIsEditing(false);
          }}
        >
          Save
        </button>
      </>
    );
  } else {
    content = (
      <>
        <label htmlFor="">{task.text}</label>
        <button
          type="button"
          onClick={() => {
            setIsEditing(true);
          }}
        >
          Edit
        </button>
      </>
    );
  }
  return (
    <div>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          dispatch({
            type: "changedCheckbox",
            checked: e.target.checked,
            id: task.id,
          });
        }}
      />
      {content}
      <button
        type="button"
        onClick={() => {
          dispatch({
            type: "deleted",
            id: task.id,
          });
        }}
      >
        Delete
      </button>
    </div>
  );
}
