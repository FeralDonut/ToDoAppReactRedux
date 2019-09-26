import React from 'react';
import PropTypes from 'prop-types';
import CreateTaskForm from '../CreateTaskForm/CreateTaskFormContainer';
import Button from '../Buttons/Button';
import style from "./CreateTaskStyles.css";

const CreateTask = ( props ) => {
  const { 
    id, 
    addTask 
  } = props;
  
  return (
    <div>
      {
          id ? <CreateTaskForm />
            : <Button
              className={style.createTask}
              onClick={() => addTask('new_task')}
              text="Create Task"
          />
      }
    </div>
  );
};

// CreateTask.propTypes = {
//   id: PropTypes.string,
//   addTask: PropTypes.func,
// };

export default CreateTask;
