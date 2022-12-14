import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../../api';

const SLICE_NAME = 'tasks';

const getTasks = createAsyncThunk(
  `${SLICE_NAME}/getTasks`,
  async (_, thunkAPI) => {
    try {
      const {
        data: { data: tasks },
      } = await API.getTasks();
      return tasks;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  tasks: [],
  isLoading: false,
  error: null,
};

const getTasksSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getTasks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTasks.fulfilled, (state, action) => {
      state.tasks = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getTasks.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

export { getTasks };

export default getTasksSlice.reducer;
