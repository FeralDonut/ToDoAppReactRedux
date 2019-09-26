import { connect } from 'react-redux';
import { deleteTask, editTask, updateTask, deselectTask } from '../Redux/actions/taskActions';
import EditTaskForm from './EditTaskForm';

const mapStateToProps = state => ({
  editActiveTask: state.editActiveTask,
});

const mapDispatchToProps = {
  deleteTask,
  editTask,
  updateTask,
  deselectTask,
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTaskForm);