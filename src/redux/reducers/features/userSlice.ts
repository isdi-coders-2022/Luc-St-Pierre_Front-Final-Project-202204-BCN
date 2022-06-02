import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IinitialState } from "../../../types/user.types";

const initialState: IinitialState = {
  name: "",
  username: "",
  email: "",
  image: "",
  id: "",
  authenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (user, action: PayloadAction<IinitialState>) => ({
      ...action.payload,
    }),
    register: (user, action: PayloadAction<IinitialState>) => ({
      ...action.payload,
    }),
  },
});

export const { login: logInActionCreator, register: registerActionCreator } =
  userSlice.actions;

export default userSlice.reducer;
