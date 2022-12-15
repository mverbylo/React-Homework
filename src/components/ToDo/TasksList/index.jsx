import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { getTasks } from '../../../store/slices/getTasksSlice';
import Task from './Task';
import ChangeTask from './ChangeTask';
import IsLoadingError from 'components/ToDo/IsLoadingError';

const TasksList = () => {
  const { tasks, isLoading, error } = useSelector((state) => state.getTasks);
  const { task } = useSelector((state) => state.createTask);
  const { data } = useSelector((state) => state.deleteTask);
  const { updateTask } = useSelector((state) => state.updateTask);
  const [idUpdateTask, setIdUpdateTask] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTasks());
  }, [task, data, idUpdateTask, updateTask]);

  return (
    <section>
      <IsLoadingError error={error} isLoading={isLoading} />
      {!!tasks.length &&
        tasks.map((task) =>
          task.id === idUpdateTask ? (
            <ChangeTask
              key={task.id}
              {...task}
              setIdUpdateTask={() => setIdUpdateTask(null)}
            />
          ) : (
            <Task
              key={task.id}
              id={idUpdateTask}
              setIdUpdateTask={() => setIdUpdateTask(task.id)}
              {...task}
            />
          )
        )}
    </section>
  );
};

export default TasksList;
