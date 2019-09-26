import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Inputs/Input';
import style from './EditTaskFormStyles.css';
import Form from '../Form/Form';

const EditTaskForm = (props) => {
  const {
    deleteTask,
    editTask,
    editActiveTask,
    updateTask,
    deselectTask
  } = props;
  const {
    id,
    title,
    value,
    effort
  } = editActiveTask;
 
  const editSave = (e) => {
    e.preventDefault();
    updateTask( id, title, value, effort );
  };
  const handleDelete = (e) => {
    e.preventDefault();
    deleteTask( id );
  };
  const handleChange = (e) => {
    editTask({ [e.target.name]: e.target.value, id });
  };
  const handleDeselect = (event) => {
     if (event.relatedTarget === null ) {
      deselectTask();
     }
    return;
  };
     
  

  return (
    <div
      onBlur={handleDeselect}
      tabIndex={0}
      className={style.editFormContainer}
    >
      <Form
        legend="Edit Task"
        handleSave={editSave}
        handleDelete={handleDelete}
        disabled={!title || !value || !effort}
      >
        <Input
          name="title"
          type="text"
          value={title}
          onChange={handleChange}
        />
        <p>Value: {value}</p>
        <Input
          name="value"
          type="range"
          min={0} max={100}
          value={value}
          onChange={handleChange}
        />
        <p>Effort: {effort} </p>
        <Input
          name="effort"
          type="range"
          min={0} max={100}
          value={effort}
          onChange={handleChange}
          autoFocus
        />
      </Form>
    </div>
  );
};

EditTaskForm.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  value: PropTypes.string,
  effort: PropTypes.string,
};

export default EditTaskForm;
