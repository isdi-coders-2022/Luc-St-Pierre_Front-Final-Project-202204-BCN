import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState, IUser } from "../../../types/user.types";

const initialState: IState = {
  userData: {
    username: "",
    email: "",
    image: "",
  },
  authenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (user, action: PayloadAction<IUser>) => ({
      userData: { ...action.payload },
      authenticated: true,
    }),
    logOut: (user) => ({
      userData: {
        username: "",
        email: "",
        image: "",
      },
      authenticated: false,
    }),
    register: (user, action: PayloadAction<IState>) => ({
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
