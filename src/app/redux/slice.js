import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterName: '',
};

export const counterSlice = createSlice({
  name: 'swgohSlice',
  initialState,
  reducers: {
    setFilterName: (state, action) => {
      state.filterName = action.payload;
    },
  },
});

export const { setFilterName } = counterSlice.actions;

export default counterSlice.reducer;
