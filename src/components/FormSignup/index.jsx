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
  wrapperInputs,
  wrapperInput,
  bigText,
  smText,
  positionAbsolute,
  btn,
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
        <div className={wrapperInputs}>
          {createInputs(inputDataSignUp(), wrapperInput, input, error)}
        </div>
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
        <Btn content="Create account" btn={btn} />
      </Form>
    </Formik>
  );
};

export default FormSignup;
