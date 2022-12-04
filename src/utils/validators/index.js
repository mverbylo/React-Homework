import * as yup from 'yup';

const name = yup.string().min(1).required();
const email = yup.string().email().required();
const password = yup.string().min(8).required();

export const LOGIN_SCHEMA = yup.object({
  email: email,
  password: password,
  isSubscribed: yup.bool(),
});
export const SIGNUP_SCHEMA = yup.object({
  firstName: name,
  lastName: name,
  displayName: yup.string().min(5).required(),
  email: email,
  password: password,
  passwordConfirmation: password,
});
