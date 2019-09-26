import React, { Fragment } from 'react';
import CreateTask from './CreateTask/CreateTaskContainer';
import TaskList from './TaskList/TaskListContainer';
import style from './styles.css';


export default () => (
  <Fragment>
    <div
      className={style.container}
      id="MyApp"
    >
      <div className={style.tasks}>
        <CreateTask />
        <TaskList />
      </div>
      <div className={style.graph}>
        <h1>Graph Goes Here</h1>
      </div>
    </div>
  </Fragment>
);
