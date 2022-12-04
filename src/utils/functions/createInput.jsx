import { v4 } from 'uuid';
import { Field, ErrorMessage } from 'formik';
export const createInput = (data, input, error) =>
  data.map((data) => (
    <div key={v4()}>
      <Field className={input} {...data} />
      <ErrorMessage className={error} name={data.name} component="div" />
    </div>
  ));

export const createRadioBtn = (
  data,
  label,
  bigText,
  smText,
  positionAbsolute
) =>
  data.map(({ value, content, description }) => (
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
  ));
