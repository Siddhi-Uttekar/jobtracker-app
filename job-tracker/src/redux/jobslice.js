import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobList: [],
};

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    addJob: (state, action) => {
      state.jobList.push(action.payload);  // Add job data (including Date Saved and Follow Up)
    },
    removeJob: (state, action) => {
      state.jobList = state.jobList.filter(job => job.id !== action.payload);
    },
    editJob: (state, action) => {
      const index = state.jobList.findIndex((job) => job.id === action.payload.id);
      if (index !== -1) {
        state.jobList[index] = action.payload;
      }
    },
  },
});

export const { addJob, removeJob, editJob } = jobSlice.actions;
export default jobSlice.reducer;
