import { configureStore } from '@reduxjs/toolkit'
import swgohReducer from './slice'

export const store = configureStore({
  reducer: {swgohReducer: swgohReducer},
})
