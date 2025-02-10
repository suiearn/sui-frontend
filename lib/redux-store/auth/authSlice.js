import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  isAuthenticated: false,
  token: null,
  userId: "",
  username: "",
  email: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.userId = action.payload.userId;
      // localStorage.setItem('token', action.payload.token)
      Cookies.set("token", action.payload.token);
    },

    logoutSuccess: (state) => {
      // localStorage.removeItem('token');
      Cookies.remove("token");
      state.isAuthenticated = false;
      state.token = null;
      state.username = "";
      state.email = "";
      state.userId = "";
    },
  },
});

export const { loginSuccess, logoutSuccess } =
  authSlice.actions;
export default authSlice.reducer;
