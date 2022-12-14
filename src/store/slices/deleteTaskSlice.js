import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../../api';

const SLICE_NAME = 'deleteTask';

const deleteTask = createAsyncThunk(
  `${SLICE_NAME}/deleteTask`,
  async (taskId, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await API.deleteTask(taskId);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

const deleteTaskSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(deleteTask.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteTask.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(deleteTask.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

export { deleteTask };

export default deleteTaskSlice.reducer;
