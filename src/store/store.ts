import {configureStore} from '@reduxjs/toolkit';
import {showsReducer} from '../Slice/ShowSlice.ts';

const store = configureStore({
  reducer: {
    show: showsReducer,
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;