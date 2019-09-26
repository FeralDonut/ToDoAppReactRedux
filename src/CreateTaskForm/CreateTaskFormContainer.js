import { connect } from 'react-redux';
import { editPendingTask, publishTask, deleteTask } from '../Redux/actions/taskActions';
import CreateTaskForm from './CreateTaskForm';

const mapStateToProps = state => ({
  id: state.pendingTask.id,
  title: state.pendingTask.title,
  value: state.pendingTask.value,
  effort: state.pendingTask.effort,
});

const mapDispatchToProps = {
  editPendingTask,
  publishTask,
  deleteTask,
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskForm);
