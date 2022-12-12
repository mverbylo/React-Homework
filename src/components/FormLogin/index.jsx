import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { LOGIN_SCHEMA } from '../../utils/validators';
import { login, createInputs, inputDataLogin } from '../../utils/functions';
import Btn from '../Btn';
import { initialStateLogin } from '../../utils/initialStates';
import styles from './FormLogin.module.scss';
const { form, input, wrapperInputs, wrapperInput, wrapper, error, btn } = styles;

const FormLogin = () => {
  const [type, setType] = useState('password');
  const showHighPassword = () =>
    setType(type === 'password' ? 'text' : 'password');
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
        <div className={wrapperInputs}>
        {createInputs(inputDataLogin(type), wrapperInput, input, error)}
        </div>
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
        <Btn content="LOGIN" btn={btn} />
      </Form>
    </Formik>
  );
};

export default FormLogin;
