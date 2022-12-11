import { BsTrash, BsCheck } from 'react-icons/bs';
import { checkTask, deleteTask } from '../TodoList/actionCreators';
import styles from './List.module.scss';
const { li, taskText, iconWrapper, check } = styles;

const List = ({ id, text, isChecked, dispatch }) => {
  return (
    <li key={id} id={id} className={isChecked ? check : li}>
      <span className={taskText} children={text} />
      <span
        className={iconWrapper}
        children={<BsCheck onClick={() => dispatch(checkTask(id))} />}
      />
      <span
        className={iconWrapper}
        children={<BsTrash onClick={() => dispatch(deleteTask(id))} />}
      />
    </li>
  );
};

export default List;
