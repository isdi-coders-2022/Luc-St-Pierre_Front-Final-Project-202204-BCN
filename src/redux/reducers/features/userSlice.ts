import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserData } from "../../../types/user.types";

const initialState: UserData = {
  id: "",
  name: "",
  username: "",
  authenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (user, action: PayloadAction<UserData>) => ({ ...action.payload }),
  },
});

export const { login: logInActionCreator } = userSlice.actions;

export default userSlice.reducer;
