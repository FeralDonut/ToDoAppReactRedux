export const addTask = id => ({
  type: 'ADD_TASK',
  id,
});

export const editPendingTask = task => ({
  type: 'EDIT_PENDING_TASK',
  task,
});

export const editTask = task => ({
  type: 'EDIT_ACTIVE_TASK',
  task,
});

export const publishTask = (title, value, effort) => {
  const id = Math.random();
  return {
    type: 'PUBLISH_TASK',
    id,
    title,
    value,
    effort,
  }
};

export const updateTask = (id, title, value, effort) => {
  return {
    type: 'UPDATE_TASK',
    id,
    title,
    value,
    effort,
  }
};

export const selectTask = (id, title, value, effort) => {
  return {
    type: "SELECT_TASK",
    id,
    title,
    value,
    effort
  }
};

export const deleteTask = id => {
  return {
    type: 'DELETE_TASK',
    id
  }
};

export const deselectTask = () => {
  return {
    type: 'DESELECT_TASK'
  }
};
