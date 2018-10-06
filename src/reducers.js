const initialState = {
  tasks: [
    {
      action: "Refactor the todo component. It's very messy",
      status: "incomplete"
    },
    {
      action: "Add CSS and make it look pretty. ",
      status: "incomplete"
    },
    {
      action: "Remove the linting errors",
      status: "incomplete"
    },
    {
      action: "Clean up the comments!",
      status: "incomplete"
    },
    {
      action: "Add button to mark task as completed",
      status: "complete"
    },
    {
      action: "Add filters to show only tasks completed",
      status: "complete"
    }
  ],
  filtered: false
};

const todoApp = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const updatedTasks = state.tasks.concat([{ action: action.text, status: 'incomplete' }]);
      return Object.assign({}, state, {
        tasks: updatedTasks
      });
    case 'DELETE_TASK':
      const filteredTasks = state.tasks.filter((task, index) => {
        return index !== Number(action.index);
      });
      return Object.assign({}, state, {
        tasks: filteredTasks
      });
    case 'TOGGLE_TASK':
      // get status based on previous status
      const newStatus = state.tasks[action.index].status === 'complete' ? 'incomplete' : 'complete';
      // update status
      return Object.assign({}, state, {
        tasks: state.tasks.map((task, mapIndex) => mapIndex === Number(action.index) ?
            {action: task.action, status: newStatus} : task
        )
      });
    case 'TOGGLE_FILTER':
      return Object.assign({}, state, {
        filtered: !state.filtered,
      });
    default:
      return state;
  }
};

export default todoApp;