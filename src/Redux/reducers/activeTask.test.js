import test from 'ava';
import activeTask from './activeTask';

test('activeTask - ADD_TASK should activate given id', (t) => {
  const state = '';
  const action = { type: 'ADD_TASK', id: '#added_task_id' };
  const result = '#added_task_id';

  t.deepEqual(activeTask(state, action), result);
});

test('activeTask - SELECT_TASK should activate given id', (t) => {
  const state = '';
  const action = { type: 'SELECT_TASK', id: '#selected_task_id' };
  const result = '#selected_task_id';

  t.deepEqual(activeTask(state, action), result);
});

test('activeTask - DESELECT_TASK should return an empty string', (t) => {
  const state = '';
  const action = { type: 'DESELECT_TASK' };
  const result = '';

  t.deepEqual(activeTask(state, action), result);
});

test('activeTask - PUBLISH_TASK should return an empty string', (t) => {
  const state = '';
  const action = { type: 'PUBLISH_TASK' };
  const result = '';

  t.deepEqual(activeTask(state, action), result);
});

test('activeTask - default response', (t) => {
  const state = '';
  const action = { type: 'default' };
  const result = '';

  t.deepEqual(activeTask(state, action), result);
});
