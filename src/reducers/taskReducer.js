export default function TaskReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changedText": {
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
    }
    case "deleted": {
      return tasks.filter((task) => task.id !== action.id);
    }
    case "changedCheckbox": {
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
    }
    default:
      throw new Error(`${action.type} Action Doesn't Match`);
  }
}
