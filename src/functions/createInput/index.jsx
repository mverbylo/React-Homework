const createInput = (inpDate, classStyle, func) =>
  inpDate.map(({ name, ...data }) => (
    <input
      key={name}
      name={name}
      className={classStyle}
      onChange={func}
      {...data}
      required
    />
  ));
export default createInput;
