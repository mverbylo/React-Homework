import { Formik, Form, Field } from 'formik';
import {
  createInputs,
  createRadioBtns,
  inputDataSignUp,
  radioBtnData,
  signup,
} from '../../utils/functions';
import Btn from '../Btn';
import styles from './FormSignup.module.scss';
import { initialStateSignUp } from '../../utils/initialStates';
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
        {createInputs(inputDataSignUp(), input, error)}
        <div className={wrapper}>
          {createRadioBtns(
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
