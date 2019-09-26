export default (state = '', action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return action.id
    case 'PUBLISH_TASK':
      return '';
    case 'SELECT_TASK':
      return action.id
    case 'DESELECT_TASK':
      return '';
    default:
      return state;
  }
 
};