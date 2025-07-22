import Task from "./Task";

export default function TaskList({
  tasks,
  onSave,
  onCheckBoxChange,
  onDelete,
}) {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onSave={onSave}
          onCheckBoxChange={onCheckBoxChange}
          onDelete={onDelete}
        />
      ))}
    </>
  );
}
