import test from 'ava';
import tasks from './tasks';

test('tasks - PUBLISH_TASK should add the new task to the task list', (t) => {
  const state = [{
    id: '1',
    title: 'first task',
    value: 1,
    effort: 2,
  }];
  const action = {
    type: 'PUBLISH_TASK',
    id: '2',
    title: 'second task',
    value: 2,
    effort: 4,
  };
  const result = [{
    id: '1',
    title: 'first task',
    value: 1,
    effort: 2,
  }, {
    id: '2',
    title: 'second task',
    value: 2,
    effort: 4,
  }];

  t.deepEqual(tasks(state, action), result);
});

test('tasks - DELETE_TASK should remove the task with the given id', (t) => {
  const state = [{
    id: '1',
    title: 'first task',
    value: 1,
    effort: 2,
  }, {
    id: '2',
    title: 'second task',
    value: 2,
    effort: 4,
  }];
  const action = { type: 'DELETE_TASK', id: '1' };
  const result = [{
    id: '2',
    title: 'second task',
    value: 2,
    effort: 4,
  }];

  t.deepEqual(tasks(state, action), result);
});

test('tasks - UPDATE_TASK should updated the task with the given id', (t) => {
  const state = [{
    id: '1',
    title: 'first task',
    value: 1,
    effort: 2,
  }, {
    id: '2',
    title: 'second task',
    value: 2,
    effort: 4,
  }];
  const action = {
    type: 'UPDATE_TASK', id: '2', title: 'task 2', value: 4, effort: 1,
  };
  const result = [{
    id: '1',
    title: 'first task',
    value: 1,
    effort: 2,
  }, {
    id: '2',
    title: 'task 2',
    value: 4,
    effort: 1,
  }];

  t.deepEqual(tasks(state, action), result);
});

test('tasks - UPDATE_TASK should updated the task with the given id', (t) => {
  const state = [{
    id: '1',
    title: 'first task',
    value: 1,
    effort: 2,
  }, {
    id: '2',
    title: 'second task',
    value: 2,
    effort: 4,
  }];
  const action = { type: 'UPDATE_TASK', id: '2', title: 'task 2' };
  const result = [{
    id: '1',
    title: 'first task',
    value: 1,
    effort: 2,
  }, {
    id: '2',
    title: 'task 2',
    value: 2,
    effort: 4,
  }];

  t.deepEqual(tasks(state, action), result);
});

test('tasks - default response', (t) => {
  const state = '';
  const action = { type: 'default' };
  const result = '';

  t.deepEqual(tasks(state, action), result);
});
