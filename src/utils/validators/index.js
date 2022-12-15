import * as yup from 'yup';
const text = yup.string().trim().min(3);
export const ADD_TASK_SCHEMA = yup.object({
  text: text,
});
export const CHANGE_TASK_SCHEMA = yup.object({
  text: text,
  isDone: yup.boolean(),
  id: yup.number(),
});
