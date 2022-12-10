const Btn = ({onClick, text}) => {
  return (
    <button key={text} onClick={onClick}>{text}</button>
  );
}

export default Btn;
