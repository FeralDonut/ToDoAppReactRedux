import { connect } from 'react-redux';
import { selectTask, deleteTask, deselectTask } from '../Redux/actions/taskActions'
import Task from './Task';

const mapStateToProps = state => ({
 activeTask: state.activeTask,
});

const mapDispatchToProps = {
  selectTask,
  deleteTask,
  deselectTask,
}
export default connect(mapStateToProps, mapDispatchToProps)(Task);
