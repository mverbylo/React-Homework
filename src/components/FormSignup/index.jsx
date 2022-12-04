import { Formik, Form, Field } from 'formik';
import {
  createInput,
  createRadioBtn,
  inputDataSignUp,
  radioBtnData,
  signup,
} from '../../utils/functions';
import Btn from '../Btn';
import styles from './FormSignup.module.scss';
import { initialStateSignUp } from '../../utils/initialState';
import { SIGNUP_SCHEMA } from '../../utils/validators';
const {
  form,
  input,
  wrapper,
  error,
  label,
  bigText,
  smText,
  positionAbsolute,
} = styles;

const FormSignup = () => {
  return (
    <Formik
      initialValues={initialStateSignUp}
      onSubmit={(values, formikBag) => {
        signup(values);
        formikBag.resetForm();
      }}
      validationSchema={SIGNUP_SCHEMA}
    >
      <Form className={form}>
        {createInput(inputDataSignUp(), input, error)}
        <div className={wrapper}>
          {createRadioBtn(
            radioBtnData(),
            label,
            bigText,
            smText,
            positionAbsolute
          )}
          <label>
            <Field type="checkbox" name="isAllow" />
            Allow Squadhelp to send marketing/promotional offers from time to
            time
          </label>
        </div>
        <Btn content="Create account" />
      </Form>
    </Formik>
  );
};

export default FormSignup;
