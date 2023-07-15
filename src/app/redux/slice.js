import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterName: '',
  filterOptions: [],
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
    }
  },
});

export const { setFilterName, setFilterOptions } = counterSlice.actions;

export default counterSlice.reducer;
