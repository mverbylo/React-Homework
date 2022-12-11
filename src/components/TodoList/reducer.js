import { v4 } from 'uuid';
import { ACTION_TYPES } from './actionTypes';
const { ONCHANGE, ADD_TASK, DELETE_TASK, CHECK_TASK } = ACTION_TYPES;

export const initialState = { task: '', taskList: [] };

export function reducer(state, action) {
  switch (action.type) {
    case ONCHANGE:
      return { ...state, task: action.payload };
    case ADD_TASK: {
      return {
        task: '',
        taskList: [
          ...state.taskList,
          { id: v4(), text: action.payload, isChecked: false },
        ],
      };
    }
    case DELETE_TASK:
      return {
        ...state,
        taskList: state.taskList.filter(({ id }) => id !== action.payload),
      };
    case CHECK_TASK:
      return {
        ...state,
        taskList: state.taskList.map((taskItem) => ({
          ...taskItem,
          isChecked: taskItem.id === action.payload ? true : taskItem.isChecked,
        })),
      };
    default:
      return state;
  }
}
