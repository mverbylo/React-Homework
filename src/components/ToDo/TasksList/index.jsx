import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getTasks } from '../../../store/slices/getTasksSlice';
import { BsTrash, BsFillPencilFill } from 'react-icons/bs';
import { deleteTask } from '../../../store/slices/deleteTaskSlice';
import styles from './TasksList.module.scss';
const { article, articleCheck, taskText, iconWrapper } = styles;

const TasksList = () => {
  const { tasks, isLoading, error } = useSelector((state) => state.getTasks);
  const { task } = useSelector((state) => state.createTask);
  const { data } = useSelector((state) => state.deleteTask);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTasks());
  }, [task, data]);

  return (
    <section>
      {isLoading && <div>Loading</div>}
      {error && <div>{error}</div>}
      {!!tasks.length &&
        tasks.map(({ id, text, isDone }) => (
          <article key={id} className={isDone ? articleCheck : article}>
            <h1 className={taskText} children={text} />
            <div className={iconWrapper} children={<BsFillPencilFill />} />
            <div
              className={iconWrapper}
              children={<BsTrash onClick={() => dispatch(deleteTask(id))} />}
            />
          </article>
        ))}
    </section>
  );
};

export default TasksList;
