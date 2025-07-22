export default function TaskReducer(tasks, action) {
  if (action.type == "added") {
    return [
      ...tasks,
      {
        id: action.id,
        text: action.text,
        done: false,
      },
    ];
  } else if (action.type == "changedText") {
    return tasks.map((task) => {
      if (task.id == action.id) {
        return {
          ...task,
          text: action.text,
        };
      } else {
        return task;
      }
    });
  } else if (action.type == "deleted") {
    return tasks.filter((task) => task.id !== action.id);
  } else if (action.type == "changedCheckbox") {
    return tasks.map((task) => {
      if (task.id == action.id) {
        return {
          ...task,
          done: action.checked,
        };
      } else {
        return task;
      }
    });
  } else {
    throw new Error(`${action.type} Action Doesn't Match`);
  }
}
