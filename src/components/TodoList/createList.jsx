import { BsTrash, BsCheck } from 'react-icons/bs';
import { checkTask, deleteTask } from './actionCreators';
import styles from './TodoList.module.scss';
const { li, taskText, iconWrapper, check } = styles;

export const createList = (taskList, dispatch) =>
  taskList.map(({ id, text, isChecked }) => (
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
  ));
