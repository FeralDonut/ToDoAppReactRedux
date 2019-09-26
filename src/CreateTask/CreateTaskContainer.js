import { connect } from 'react-redux';
import { addTask } from '../Redux/actions/taskActions';
import CreateTask from './CreateTask';

const mapStateToProps = state => ({
  id: state.pendingTask.id,
});

const mapDispatchToProps = {
  addTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTask);
