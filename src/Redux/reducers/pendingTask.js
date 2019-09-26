export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        id: action.id,
        title: '',
        value: undefined,
        effort: undefined,
      };
    case 'EDIT_PENDING_TASK':
      return {
        id: action.task.id,
        title: action.task.title !== undefined ? (action.task.title) : (state.title),
        value: action.task.value  !== undefined ? (action.task.value) : (state.value),
        effort: action.task.effort  !== undefined ? (action.task.effort) : (state.effort),
      };
    case 'PUBLISH_TASK':
     return {
     };
    case 'DELETE_TASK':
      if(action.id === state.id)
        return {};
    default:
      return state;
  }
};
