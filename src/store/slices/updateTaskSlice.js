import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../../api';

const SLICE_NAME = 'updateTask';

const updateTask = createAsyncThunk(
  `${SLICE_NAME}/updateTask`,
  async (taskData, thunkAPI) => {
    try {
      const {
        data: { data: updateTask },
      } = await API.updateTask(taskData);
      return updateTask;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  updateTask: {
    text: null,
    isDone: false,
  },
  isLoading: false,
  error: null,
};

const updateTaskSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(updateTask.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateTask.fulfilled, (state, action) => {
      state.updateTask = action.payload;
      state.isLoading = false;
    });
    builder.addCase(updateTask.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

export { updateTask };

export default updateTaskSlice.reducer;
