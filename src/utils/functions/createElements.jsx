import { v4 } from 'uuid';
import Input from '../../components/Input';
import RadioBtn from '../../components/RadioBtn';

export const createInputs = (data, wrapperInput, input, error) =>
  data.map((data) => (
    <Input
      key={v4()}
      data={data}
      wrapperInput={wrapperInput}
      input={input}
      error={error}
    />
  ));

export const createRadioBtns = (
  data,
  label,
  bigText,
  smText,
  positionAbsolute
) =>
  data.map((props) => (
    <RadioBtn
      key={v4()}
      {...props}
      label={label}
      bigText={bigText}
      smText={smText}
      positionAbsolute={positionAbsolute}
    />
  ));
