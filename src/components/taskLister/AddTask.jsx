import { useState } from "react";
export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");
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
          onAddTask(text);
          setText("");
        }}
      >
        Add
      </button>
    </>
  );
}
