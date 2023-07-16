import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterName: '',
  filterOptions: [],
  filterApply: [],
};

export const counterSlice = createSlice({
  name: 'swgohSlice',
  initialState,
  reducers: {
    setFilterName: (state, action) => {
      state.filterName = action.payload;
    },
    setFilterOptions: (state, action) => {
      state.filterOptions = action.payload;
    },
    setFilterApply: (state, action) => {
      state.filterApply = action.payload;
    },
  },
});

export const { setFilterName, setFilterOptions, setFilterApply } = counterSlice.actions;

export default counterSlice.reducer;
