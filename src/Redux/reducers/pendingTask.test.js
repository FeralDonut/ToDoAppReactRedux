import test from 'ava';
import pendingTask from './pendingTask';

test('pendingTask - ADD_TASK should return a task with default values and given id', (t) => {
  const state = {};
  const action = {
    type: 'ADD_TASK',
    id: 'new_task',
  };
  const result = {
    id: 'new_task',
    title: '',
    value: undefined,
    effort: undefined,
  };

  t.deepEqual(pendingTask(state, action), result);
});

test('pendingTask - EDIT_PENDING_TASK should return task with given values', (t) => {
  const state = {
    id: 'task_one',
    title: 'first task',
    value: 1,
    effort: 99,
  };
  const action = {
    type: 'EDIT_PENDING_TASK',
    task: {
      id: 'task_one',
      title: 'task one',
      value: 45,
      effort: 40,
    },
  };
  const result = {
    id: 'task_one',
    title: 'task one',
    value: 45,
    effort: 40,
  };

  t.deepEqual(pendingTask(state, action), result);
});

test('pendingTask - PUBLISH_TASK should return an empty object', (t) => {
  const state = {
    id: 'task_one',
    title: 'task one',
    value: 45,
    effort: 40,
  };
  const action = { type: 'PUBLISH_TASK' };
  const result = {};

  t.deepEqual(pendingTask(state, action), result);
});

test('pendingTask - DELETE_TASK should delete task if given id matches pending task id', (t) => {
  const state = {
    id: 'task_one',
    title: 'task one',
    value: 45,
    effort: 40,
  };
  const action = { type: 'DELETE_TASK', id: 'task_one' };
  const result = {};

  t.deepEqual(pendingTask(state, action), result);
});

test('pendingTask - DELETE_TASK should change nothing if a different task is being deleted', (t) => {
  const state = {
    id: 'task_one',
    title: 'task one',
    value: 45,
    effort: 40,
  };
  const action = { type: 'DELETE_TASK', id: 'task_two' };
  const result = {
    id: 'task_one',
    title: 'task one',
    value: 45,
    effort: 40,
  };

  t.deepEqual(pendingTask(state, action), result);
});

test('pendingTask - default response', (t) => {
  const state = {};
  const action = { type: 'unrecognized action type' };
  const result = {};

  t.deepEqual(pendingTask(state, action), result);
});
