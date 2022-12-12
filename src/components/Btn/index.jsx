const Btn = ({ content,  btn}) => {
  return (
    <button className={btn} type="submit">
      {content}
    </button>
  );
};

export default Btn;
