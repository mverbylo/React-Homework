import { useSelector, useDispatch } from 'react-redux';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { createTask } from '../../../store/slices/createTaskSlice';
import { ADD_TASK_SCHEMA } from '../../../utils/validators/index';
import IsLoadingError from 'components/ToDo/IsLoadingError';
import styles from './CreateTaskForm.module.scss';
const { form, input, btn, errorMessage } = styles;

const initialValues = {
  text: '',
};
const CreateTaskForm = () => {
  const { isLoading, error } = useSelector((state) => state.createTask);
  const dispatch = useDispatch();
  const submitHandler = (values, formikBag) => {
    dispatch(createTask(values));
    formikBag.resetForm();
  };

  return (
    <>
      <IsLoadingError error={error} isLoading={isLoading} />
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={ADD_TASK_SCHEMA}
      >
        <Form className={form}>
          <Field
            name="text"
            placeholder="Add task. Task must me 3 symbol or more letters only"
            className={input}
          />
          <button type="submit" className={btn}>
            Add
          </button>
          <ErrorMessage className={errorMessage} component="div" name="text" />
        </Form>
      </Formik>
    </>
  );
};

export default CreateTaskForm;
