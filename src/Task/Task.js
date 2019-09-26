import React, { Fragment } from 'react';
import style from './TaskStyles.css';
import EditTaskForm from "../EditTaskForm/EditTaskFormContainer"

const Task = ( props ) => {
  const {
    id,
    title,
    value,
    effort,
    selectTask,
    activeTask,
  } = props;

  const handleSelect = () => selectTask( id, title, value, effort );

  return (
    <Fragment>  
    { 
      activeTask === id ? 
      <EditTaskForm /> :
      id &&
      <div
        className={style.task}
        onClick={handleSelect}
      >
        <h1 className={style.title}>
          {title}
        </h1>
        <p>Value: {value}/100</p>
        <progress
          className={style.progress}
          value={value}
          max={100}
        />
        <p>Effort: {effort}/100</p>
        <progress
          className={style.progress}
          value={effort}
          max={100}
        />
      </div>
    }
    </Fragment>
  );

};

export default Task;
