import { useReducer } from 'react';
import { reducer, initialState } from './reducer';
import { onChange, addTask } from './actionCreators';
import { createList } from './createList';
import styles from './TodoList.module.scss';
const { block, wrapper, input, btn, ul } = styles;

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
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
        <ul className={ul}>{createList(state.taskList, dispatch)}</ul>
      )}
    </div>
  );
};

export default TodoList;
