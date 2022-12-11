import { useReducer } from 'react';
import { reducer, initialState } from './reducer';
import { onChange, addTask } from './actionCreators';
import List from '../List';
import styles from './TodoList.module.scss';
const { block, wrapper, input, btn, ul } = styles;

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const createList = (taskList) =>
    taskList.map((data) => <List {...data} dispatch={dispatch} />);

  return (
    <div className={block}>
      <div className={wrapper}>
        <input
          type="text"
          value={state.task}
          className={input}
          onChange={({ target: { value } }) => dispatch(onChange(value))}
        />
        <button className={btn} onClick={() => dispatch(addTask(state.task))}>
          Add
        </button>
      </div>
      {!!state.taskList.length && (
        <ul className={ul}>{createList(state.taskList)}</ul>
      )}
    </div>
  );
};

export default TodoList;
