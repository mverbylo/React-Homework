import { v4 } from 'uuid';
import { Field } from 'formik';
const RadioBtn = ({
  value,
  content,
  description,
  label,
  bigText,
  smText,
  positionAbsolute,
}) => {
  return (
    <label key={v4()} className={label}>
      <Field
        className={positionAbsolute}
        type="radio"
        name="isBuyer"
        value={value}
      />
      <p className={bigText}>{content}</p>
      <p className={smText}>{description}</p>
    </label>
  );
};

export default RadioBtn;
