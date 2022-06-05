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
    logIn: (user, action: PayloadAction<IinitialState>) => ({
      ...action.payload,
      authenticated: true,
    }),
    logOut: (user) => ({
      name: "",
      email: "",
      username: "",
      image: "",
      id: "",
      authenticated: false,
    }),
    register: (user, action: PayloadAction<IinitialState>) => ({
      ...action.payload,
    }),
  },
});

export const {
  logIn: logInActionCreator,
  logOut: logOutActionCreator,
  register: registerActionCreator,
} = userSlice.actions;

export default userSlice.reducer;
