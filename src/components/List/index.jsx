import { BsTrash, BsCheck } from 'react-icons/bs';
import styles from './List.module.scss';
const { li, taskText, iconWrapper, check } = styles;

const List = ({ id, text, isChecked, deleteTask, checkTask }) => {
  return (
    <li id={id} className={isChecked ? check : li}>
      <span className={taskText} children={text} />
      <span
        className={iconWrapper}
        children={<BsCheck onClick={() => checkTask(id)} />}
      />
      <span
        className={iconWrapper}
        children={<BsTrash onClick={() => deleteTask(id)} />}
      />
    </li>
  );
};

export default List;
