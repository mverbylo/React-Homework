import { bindActionCreators } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import * as yup from 'yup';
import * as toDoListActionCreators from '../../store/slices/toDoListSlice';
import List from '../List';
import styles from './TodoList.module.scss';
const { block, wrapper, input, notValidInput, btn, ul } = styles;
const schema = yup.string().trim().min(3);

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
  const isValid = schema.isValidSync(task);
  return (
    <div className={block}>
      <div className={wrapper}>
        <input
          type="text"
          className={isValid ? input : notValidInput}
          value={task}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Add task. Task must me 3 symbol or more letters only"
        />
        <button
          className={btn}
          type="submit"
          onClick={() => {
            if (isValid) {
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
