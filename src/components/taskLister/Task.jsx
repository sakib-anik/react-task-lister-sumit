import { useState } from "react";
export default function Task({ task, onSave, onCheckBoxChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.text);
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
            onSave(task.id, text);
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
        onChange={(e) => onCheckBoxChange(task.id, e.target.checked)}
      />
      {content}
      <button type="button" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </div>
  );
}
