import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getTasks } from '../../store/slices/getTasksSlice';
import { BsTrash, BsCheck } from 'react-icons/bs';
import styles from './List.module.scss';
const { li, taskText, iconWrapper, check } = styles;

const List = () => {
  const { tasks, isLoading, error } = useSelector((state) => state.getTasks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <section>
      {isLoading && <div>Loading</div>}
      {error && <div>{error}</div>}
      {tasks.length > 0 &&
        tasks.map(({ id, text, isDone }) => (
          <article key={id} className={isDone ? check : li}>
            <h1 className={taskText} children={text} />
            <div className={iconWrapper} children={<BsCheck />} />
            <div className={iconWrapper} children={<BsTrash />} />
          </article>
        ))}
    </section>
  );
};

export default List;
