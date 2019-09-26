export default (state = [], action) => {
  switch (action.type) {
    case 'PUBLISH_TASK':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          value: action.value,
          effort: action.effort,
        }
      ];
    case 'UPDATE_TASK':
      return state.map( task => {
        if (task.id === action.id) {
          return {
            id: action.id,
            title: action.title !== undefined ? action.title : task.title,
            value: action.value  !== undefined ? action.value : task.value,
            effort: action.effort  !== undefined ? action.effort : task.effort
          }
        }
        return task;
      });
    case 'DELETE_TASK':
      return state.filter( task => task.id !== action.id)
    default:
      return state;
  }
};