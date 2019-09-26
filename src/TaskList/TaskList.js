import React from 'react';
import Task from '../Task/TaskContainer';
import style from './TaskListStyles.css';

const TaskList = (props) => {
  
  const task = props.tasks.map(task =>(
    <Task
      key={task.id}
      id={task.id}
      title={task.title}
      value={task.value}
      effort={task.effort}
    />
       
  ));
  
  return(
    <div className={style.container} >
      {task}
    </div>
  );
};

export default TaskList