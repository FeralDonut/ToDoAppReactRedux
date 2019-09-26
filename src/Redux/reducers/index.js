import { combineReducers } from 'redux';
import activeTask from './activeTask';
import pendingTask from './pendingTask';
import editActiveTask from './editActiveTask';
import tasks from './tasks';

export default combineReducers({
  activeTask,
  pendingTask,
  tasks,
  editActiveTask,
});
