import Input from '../../components/Input';
import RadioBtn from '../../components/RadioBtn';

export const createInput = (data, input, error) =>
  data.map((data) => <Input data={data} input={input} error={error} />);

export const createRadioBtn = (
  data,
  label,
  bigText,
  smText,
  positionAbsolute
) =>
  data.map((props) => (
    <RadioBtn
      {...props}
      label={label}
      bigText={bigText}
      smText={smText}
      positionAbsolute={positionAbsolute}
    />
  ));
