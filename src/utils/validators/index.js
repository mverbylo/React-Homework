import * as yup from 'yup';
export const ADD_TASK_SCHEMA = yup.object({
  text: yup.string().trim().min(3),
});