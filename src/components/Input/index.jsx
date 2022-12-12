import { Field, ErrorMessage } from 'formik';
const Input = ({ data,wrapperInput, input, error }) => {
  return (
    <div className={wrapperInput} >
      <Field className={input} {...data} />
      <ErrorMessage className={error} name={data.name} component="div" />
    </div>
  );
};

export default Input;
