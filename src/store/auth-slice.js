import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    userName: "",
    role: "",
    refreshToken: "",
    accessToken: "",
  },
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.userName = action.payload.userName;
      state.role = action.payload.role;
      if (localStorage.getItem("logicCredentials") === null) {
        persistLoginData(
          state.isLoggedIn,
          state.userName,
          state.role,
          state.accessToken,
          state.refreshToken
        );
      }
    },

    setAccessToken(state, action) {
      state.accessToken = action.payload.accessToken;
    },
    setRefreshToken(state, action) {
      state.refreshToken = action.payload.refreshToken;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.userName = "";
      state.role = "";
      localStorage.clear();
    },
  },
});

function persistLoginData(
  isLoggedIn,
  userName,
  role,
  accessToken,
  refreshToken
) {
  const dataToPersist = {
    isLoggedIn: isLoggedIn,
    userName: userName,
    role: role,
    accessToken: accessToken,
    refreshToken: refreshToken,
  };
  localStorage.setItem("logicCredentials", JSON.stringify(dataToPersist));
}
export const authActions = authSlice.actions;
export default authSlice;
