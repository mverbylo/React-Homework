import { ACTION_TYPES } from './actionTypes';
const { ONCHANGE, ADD_TASK, DELETE_TASK, CHECK_TASK } = ACTION_TYPES;

export const onChange = (value) => ({ type: ONCHANGE, payload: value });
export const addTask = (taskInInput) => ({
  type: ADD_TASK,
  payload: taskInInput,
});
export const deleteTask = (idTask) => ({ type: DELETE_TASK, payload: idTask });
export const checkTask = (idTask) => ({ type: CHECK_TASK, payload: idTask });
