import { bindActionCreators } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import * as toDoListActionCreators from '../../store/slices/toDoListSlice';
import * as yup from 'yup';

import List from '../List';
import styles from './TodoList.module.scss';
const { block, wrapper, input, btn, ul } = styles;
const schema = yup.string().min(3);
const TodoList = () => {
  const { task, taskList } = useSelector((state) => state.toDoList);

  const { onChange, addTask, deleteTask, checkTask } = bindActionCreators(
    { ...toDoListActionCreators },
    useDispatch()
  );
  const createList = (taskList) =>
    taskList.map((data) => (
      <List
        key={v4()}
        {...data}
        deleteTask={deleteTask}
        checkTask={checkTask}
      />
    ));

  return (
    <div className={block}>
      <div className={wrapper}>
        <input
          type="text"
          className={input}
          onChange={(e) => onChange(e.target.value)}
        />
        <button
          className={btn}
          type="submit"
          onClick={() => {
            if (schema.isValidSync(task)) {
              addTask(task);
            }
          }}
        >
          Add
        </button>
      </div>

      {!!taskList.length && <ul className={ul}>{createList(taskList)}</ul>}
    </div>
  );
};

export default TodoList;
