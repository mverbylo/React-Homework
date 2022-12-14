import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../../api';

const SLICE_NAME = 'createTask';

const createTask = createAsyncThunk(
  `${SLICE_NAME}/createTask`,
  async (taskData, thunkAPI) => {
    try {
      const {
        data: { data: task },
      } = await API.createTask(taskData);
      return task;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  task: null,
  isLoading: false,
  error: null,
};

const createTaskSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createTask.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createTask.fulfilled, (state, action) => {
      state.task = action.payload;
      state.isLoading = false;
    });
    builder.addCase(createTask.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

export { createTask };

export default createTaskSlice.reducer;
