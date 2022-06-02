import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IinitialState } from "../../../types/user.types";

const initialState: IinitialState = {
  name: "",
  username: "",
  image: "",
  id: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (user, action: PayloadAction<IinitialState>) => ({
      ...action.payload,
    }),
  },
});

export const { login: logInActionCreator } = userSlice.actions;

export default userSlice.reducer;
