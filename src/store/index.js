import { configureStore } from "@reduxjs/toolkit";
import listReducer from "../features/card-list/CardListSlice";
import userReducer from "../features/user/UserSlice";
import loginReducer from "../features/login/LoginSlice";

export const index = configureStore({
  reducer: {
    cardList: listReducer,
    user: userReducer,
    login: loginReducer,
  },
});
