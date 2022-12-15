import { BsTrash, BsFillPencilFill } from 'react-icons/bs';
import { deleteTask } from '../../../../store/slices/deleteTaskSlice';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Task.module.scss';
import IsLoadingError from 'components/ToDo/IsLoadingError';
const { article, articleCheck, taskText, iconWrapper } = styles;

const Task = ({ text, id, isDone, setIdUpdateTask }) => {
  const { isLoading, error } = useSelector((state) => state.deleteTask);
  const dispatch = useDispatch();
  return (
    <>
      <IsLoadingError error={error} isLoading={isLoading} />
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
    </>
  );
};

export default Task;
