import { v4 } from 'uuid';
import { Field, ErrorMessage } from 'formik';
const Input = ({ data, input, error }) => {
  return (
    <div key={v4()}>
      <Field className={input} {...data} />
      <ErrorMessage className={error} name={data.name} component="div" />
    </div>
  );
};

export default Input;
