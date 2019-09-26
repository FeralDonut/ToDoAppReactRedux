import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Inputs/Input';
import Form from '../Form/Form';

const CreateTaskForm = (props) => {
  const {
    id,
    title,
    value,
    effort,
    editPendingTask,
    publishTask,
    deleteTask
  } = props;

  const handleChange = (event) => {
    editPendingTask({ [event.target.name]: event.target.value, id: 'new_task' });
  };
  const createSave = (e) => {
    e.preventDefault();
    publishTask(title, value, effort);
  };
  const handleDelete = (e) => {
    e.preventDefault();
    deleteTask( id );
  };
  return (
    <Form
      legend="Create a New Task"
      handleSave={createSave}
      handleDelete={handleDelete}
      disabled={!title || !value || !effort}
    >
      <Input
        name="title"
        type="text"
        placeholder="title"
        id="title"
        onChange={e => handleChange(e)} 
      />
      <p>Value: {value}</p>
      <Input
        name="value"
        type="range"
        min={0} 
        max={100}
        id="value"
        onChange={e => handleChange(e)}
      />
      <p>Effort: {effort} </p>
      <Input
        name="effort"
        type="range"
        min={0} 
        max={100}
        id="effort"
        onChange={e => handleChange(e)}
      />
    </Form>
  );
};

CreateTaskForm.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
  effort: PropTypes.string,
};

export default CreateTaskForm;
