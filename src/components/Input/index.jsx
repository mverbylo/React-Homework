import { Field, ErrorMessage } from 'formik';
const Input = ({ data, input, error }) => {
  return (
    <div>
      <Field className={input} {...data} />
      <ErrorMessage className={error} name={data.name} component="div" />
    </div>
  );
};

export default Input;
