import { v4 } from 'uuid';
import { ACTION_TYPES } from './actionTypes';
const { ONCHANGE, ADD_TASK, DELETE_TASK, CHECK_TASK } = ACTION_TYPES;

export const initialState = { task: '', taskList: [] };

export function reducer(state, action) {
  switch (action.type) {
    case ONCHANGE:
      return { ...state, task: action.payload };
    case ADD_TASK: {
      const newTaskList = state.taskList;
      newTaskList.push({ id: v4(), text: action.payload, isChecked: false });
      return { task: '', taskList: newTaskList };
    }
    case DELETE_TASK:
      return {
        ...state,
        taskList: state.taskList.filter(({ id }) => id !== action.payload),
      };
    case CHECK_TASK:
      return {
        ...state,
        taskList: state.taskList.map((taskItem) =>
          taskItem.id === action.payload
            ? { ...taskItem, isChecked: true }
            : { ...taskItem }
        ),
      };
    default:
      return state;
  }
}
