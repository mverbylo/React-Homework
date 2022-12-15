import { BsTrash, BsFillPencilFill } from 'react-icons/bs';
import { deleteTask } from '../../../store/slices/deleteTaskSlice';
import { useDispatch } from 'react-redux';
import styles from './Task.module.scss';
const { article, articleCheck, taskText, iconWrapper } = styles;

const Task = ({ text, id, isDone, setIdUpdateTask }) => {
  const dispatch = useDispatch();
  return (
    <article className={isDone ? articleCheck : article}>
      <h1 className={taskText} children={text} />
      <div
        className={iconWrapper}
        children={<BsFillPencilFill onClick={setIdUpdateTask} />}
      />
      <div
        className={iconWrapper}
        children={<BsTrash onClick={() => dispatch(deleteTask(id))} />}
      />
    </article>
  );
};

export default Task;
