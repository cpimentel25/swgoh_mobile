import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const mySlice = createSlice({
  name: 'swgohSlice',
  initialState,
  reducers: {},
});

// Exporta las acciones generadas automáticamente por Redux Toolkit
export const {} = mySlice.actions;

export default mySlice.reducer;
