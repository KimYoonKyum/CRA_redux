import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import listReducer from '../features/card-list/slices/CardListSlice';
import userReducer from '../features/user/userSlice';

export const index = configureStore({
  reducer: {
    counter: counterReducer,
    cardList: listReducer,
    user: userReducer
  },
});
