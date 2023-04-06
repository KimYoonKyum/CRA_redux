import { createSlice } from "@reduxjs/toolkit";
import { LoginModel } from "./LoginModel";

export const loginSlice = createSlice({
  name: "login",
  initialState: LoginModel,
  reducers: {
    onChangeLoginData: (state, action) => {
      const { id, value } = action.payload;
      state.loginData = { ...state.loginData, [id]: value };
    },
    onChangeIsLoginFail: (state, action) => {
      const { value } = action.payload;
      state.isLoginFail = value;
    },
  },
});

export const getLoginData = (state) => state.login.loginData;
export const getIsLoginFail = (state) => state.login.isLoginFail;
export const { onChangeLoginData, onChangeIsLoginFail } = loginSlice.actions;
export default loginSlice.reducer;
