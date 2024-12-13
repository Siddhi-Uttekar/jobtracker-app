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
  },
});

export const { addJob, removeJob } = jobSlice.actions;
export default jobSlice.reducer;
