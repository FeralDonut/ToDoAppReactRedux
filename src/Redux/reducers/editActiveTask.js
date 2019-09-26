
export default (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_TASK':
    return {
      id: action.id,
      title: action.title,
      value: action.value,
      effort: action.effort,
    }
    case 'EDIT_ACTIVE_TASK':
      return {
        id: action.task.id,
        title: action.task.title !== undefined ? (action.task.title) : (state.title),
        value: action.task.value  !== undefined ? (action.task.value) : (state.value),
        effort: action.task.effort  !== undefined ? (action.task.effort) : (state.effort),
      };
    default:
      return state;
    }
  };

