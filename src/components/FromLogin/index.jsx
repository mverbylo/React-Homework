import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { LOGIN_SCHEMA } from '../../utils/validators';
import { login, createInput, inputDataLogin } from '../../utils/functions';
import Btn from '../Btn';
import { initialStateLogin } from '../../utils/initialState';
import styles from './FromLogin.module.scss';
const { form, input, wrapper, error } = styles;

const FromLogin = () => {
  const [type, setType] = useState('password');
  const showHighPassword = () =>
    type === 'password' ? setType('text') : setType('password');
  return (
    <Formik
      initialValues={initialStateLogin}
      onSubmit={(values, formikBag) => {
        login(values);
        formikBag.resetForm();
      }}
      validationSchema={LOGIN_SCHEMA}
    >
      <Form className={form}>
        {createInput(inputDataLogin(type), input, error)}
        <div className={wrapper}>
          <label>
            <Field type="checkbox" name="isRememberMe" />
            Remember Me
          </label>
          <button onClick={showHighPassword} type="button">
            {type === 'password' ? 'Show' : 'Hide'} password
          </button>
          <Link to="/">Forgot Password</Link>
        </div>
        <Btn content="LOGIN" />
      </Form>
    </Formik>
  );
};

export default FromLogin;
