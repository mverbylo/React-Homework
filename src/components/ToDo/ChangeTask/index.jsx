import { Form, Formik, Field, ErrorMessage } from 'formik';
import { updateTask } from '../../../store/slices/updateTaskSlice';
import { CHANGE_TASK_SCHEMA } from 'utils/validators';
import { useDispatch } from 'react-redux';
import styles from './ChangeTask.module.scss';
const { form, input, checkbox, btn } = styles;
const ChangeTask = ({ text, id, isDone, setIdUpdateTask }) => {
  const initialValues = {
    text: '',
    isDone: false,
    id: id,
  };
  const dispatch = useDispatch();
  const submitHandler = (values, formikBag) => {
    setIdUpdateTask();
    dispatch(updateTask(values));
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={CHANGE_TASK_SCHEMA}
    >
      <Form className={form}>
        <Field name="text" placeholder={text} className={input} />
        <label className={checkbox}>
          <Field type="checkbox" name="isDone" />
          Is done?
        </label>
        <button type="submit" className={btn}>
          Change
        </button>
        <ErrorMessage component="div" name="text" />
      </Form>
    </Formik>
  );
};

export default ChangeTask;
