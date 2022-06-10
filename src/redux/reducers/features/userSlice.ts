import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState, IUser } from "../../../types/user.types";

const initialState: IState = {
  userData: {
    username: "",
    name: "",
    email: "",
    image: "",
    imageBackup: "",
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
        name: "",
        email: "",
        image: "",
        imageBackup: "",
      },
      authenticated: false,
    }),
  },
});

export const { logIn: logInActionCreator, logOut: logOutActionCreator } =
  userSlice.actions;

export default userSlice.reducer;
